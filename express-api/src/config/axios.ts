import axios, { AxiosInstance } from 'axios'
import 'dotenv/config'

export const api: AxiosInstance = axios.create({
    baseURL: process.env.EXTERNAL_API_URL!,
    responseType: 'json',
    timeout: 7000,
})
