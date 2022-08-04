import axios from 'axios'
import { ILoginParams, ILogoutParams } from '../interfaces'

const API_URL = 'http://localhost:3001'

export const apiGetReq = (url: string) => {
  return axios
    .get(`${API_URL}${url}`)
    .then((response) => response.data)
}

export const apiPostReq = (url: string, params:ILoginParams | ILogoutParams) => {
  return axios
    .post(`${API_URL}${url}`, params, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.data)
}