import React from 'react'
import axios from 'axios'
import { ACCESS_TOKEN } from './constants'
import { useNavigate } from 'react-router-dom'


const api =axios.create({
    //baseURL: "http://127.0.0.1:8000"
    baseURL: "http://Morison:9090"
    // baseURL: import.meta.env.VITE_API_URL
    //npm start -- --host 0.0.0.0

    
})


api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {

        return (
            Promise.reject(error),
            useNavigate('/login')
        )
    }
)

export default api