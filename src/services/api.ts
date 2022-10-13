import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    authorization: `bearer mocktokenjustforfun`,
    client: 'form-party',
  },
})
