import axios from 'axios'

const axiosIns = axios.create({
  baseURL: process.env.API_URL,
})

export default axiosIns
