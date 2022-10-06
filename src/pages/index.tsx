import Head from 'next/head'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '../components/Input'
import { MaskInput } from '../components/MaskInput'
import { Button } from '../components/Button'

import { Form, FormBox, InputSection, MainContainer } from '../styles'

const presenceFormValidationSchema = z.object({
  name: z.string().min(1, 'Informe seu nome'),
  email: z.string().email('Informe um email válido'),
  telephone: z.string().min(11, 'Informe seu número'),
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
      telephone: '',
    },
    resolver: zodResolver(presenceFormValidationSchema),
  })

  async function onSubmit(data: PresenceFormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
  }

  return (
    <>
      <Head>
        <title>Gustavo Party</title>
      </Head>
      <MainContainer>
        <h1>Gustavo Party</h1>
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
                name="telephone"
                control={control}
                render={({ field: { onChange, ...field } }) => (
                  <MaskInput
                    placeholder="Telefone"
                    format="(##) #####-####"
                    handleChange={({ formattedValue, value }) => {
                      onChange(formattedValue)
                      setValue('telephone', value)
                    }}
                    error={errors.telephone}
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
      </MainContainer>
    </>
  )
}
