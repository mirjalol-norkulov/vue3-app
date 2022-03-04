import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://newsapi.org/v2',
  params: {
    apiKey: '8dc1c72e81e74a4584644353ef1c54d3'
  }
})