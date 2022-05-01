import axios from 'axios'

const token = typeof window !== "undefined" ? window.localStorage.getItem('token') : ""

export const axiosIns = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Authorization': `Bearer ${token}`,
  },
})

export const setHeaders = (headers:any) => {
  axiosIns.defaults.headers = headers
}

