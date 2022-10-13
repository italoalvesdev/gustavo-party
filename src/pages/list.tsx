import Head from 'next/head'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { Pen, Trash } from 'phosphor-react'
import { api } from '../services/api'

import { GuestsList, Header, ListContainer, Table } from '../styles/list'
import { withSSRAuth } from '../utils/withSSRAuth'

interface ListProps {
  result: string
  code: number
  requestId: string
  resultListGuests: {
    name: string
    cellphoneNumber: string
  }[]
}

export default function List({ resultListGuests }: ListProps) {
  const router = useRouter()

  async function onRemoveGuest() {
    try {
      const { token: uuid } = parseCookies()
      const response = await api.delete(`/v1/guests/${uuid}`)
      console.log(response.data)
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Head>
        <title>Gustavo Party</title>
      </Head>
      <ListContainer>
        <Header>
          <h1>Lista de participantes</h1>
        </Header>
        <GuestsList>
          <Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Telefone</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {resultListGuests.length > 0 ? (
                resultListGuests.map((guests) => {
                  return (
                    <tr key={guests.name}>
                      <td>{guests.name}</td>
                      <td>{guests.cellphoneNumber}</td>
                      <td>
                        <div>
                          <button onClick={() => onRemoveGuest()}>
                            <Trash size={20} />
                          </button>
                          <button
                            onClick={() =>
                              router.push('/', {
                                query: {
                                  edit: 'a',
                                },
                              })
                            }
                          >
                            <Pen size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              ) : (
                <p>Nenhum participante</p>
              )}
            </tbody>
          </Table>
        </GuestsList>
      </ListContainer>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const { token: uuid } = parseCookies(ctx)

  const response = await api.get('/v1/guests', { headers: { uuid } })
  console.log(response.data)
  const data = response.data
  return {
    props: data,
  }
})
