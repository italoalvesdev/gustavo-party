import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { v4 as uuidV4 } from 'uuid'
import { setCookie, parseCookies } from 'nookies'

import { Input } from '../components/Input'
import { MaskInput } from '../components/MaskInput'
import { Button } from '../components/Button'

import {
  Container,
  HeaderAndFormSection,
  Header,
  Form,
  FormBox,
  InputSection,
  Footer,
} from '../styles'
import { api } from '../services/api'
import { useEffect } from 'react'

const presenceFormValidationSchema = z.object({
  name: z.string().min(1, 'Informe seu nome'),
  email: z.string().email('Informe um email válido'),
  cellphoneNumber: z.string().min(11, 'Informe seu número'),
})

type PresenceFormData = z.infer<typeof presenceFormValidationSchema>

export default function Registration() {
  const {
    handleSubmit,
    register,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<PresenceFormData>({
    defaultValues: {
      cellphoneNumber: '',
    },
    resolver: zodResolver(presenceFormValidationSchema),
  })

  const { push, isReady } = useRouter()
  const { token } = parseCookies()
  useEffect(() => {
    if (isReady) {
      const fetchData = async () => {
        const response = await api.get(`v1/guests/${token}/`)
        setValue('name', response.data.name)
        setValue('email', response.data.email)
        setValue('cellphoneNumber', response.data.cellphoneNumber)
      }
      fetchData()
    }
  }, [isReady, setValue, token])

  async function onSubmit(data: PresenceFormData) {
    const { token: uuid } = parseCookies()
    console.log(uuid)

    try {
      await api.put('/v1/guests', data, {
        headers: { uuid },
      })
      push('/list')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Head>
        <title>Gustavo Party</title>
      </Head>
      <Container>
        <HeaderAndFormSection>
          <Header>
            <h1>Gustavo e Italo Party - 15/10</h1>
          </Header>
          <FormBox>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <InputSection>
                <Input
                  {...register('name')}
                  placeholder="Nome"
                  error={errors.name}
                />
                <Input
                  {...register('email')}
                  placeholder="Email"
                  error={errors.email}
                />
                <Controller
                  name="cellphoneNumber"
                  control={control}
                  render={({ field: { onChange, ...field } }) => (
                    <MaskInput
                      placeholder="Telefone"
                      format="(##) #####-####"
                      handleChange={({ formattedValue, value }) => {
                        onChange(formattedValue)
                        setValue('cellphoneNumber', value)
                      }}
                      error={errors.cellphoneNumber}
                      {...field}
                    />
                  )}
                />
              </InputSection>

              <Button
                type="submit"
                isLoading={isSubmitting}
                disabled={!!isSubmitting}
              >
                Confirmar Presença
              </Button>
            </Form>
          </FormBox>
        </HeaderAndFormSection>

        <Footer>
          <div>
            <p>Frontend Developer: Italo Alves</p>
            <p>Backend Developer: João Pedro Mendes</p>
          </div>
        </Footer>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token } = parseCookies(ctx)

  if (!token) {
    const uuid = uuidV4()

    await api.post('/v0/uuid-registrations', undefined, {
      params: { uuid },
    })
    setCookie(ctx, 'token', uuid, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
  }

  return {
    props: {},
  }
}
