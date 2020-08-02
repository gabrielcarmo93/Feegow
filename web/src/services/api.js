import axios from 'axios'

const api = {
  local: axios.create({
    baseURL: 'http://localhost:3333'
  }),
  feegow: axios.create({
    baseURL: 'https://api.feegow.com.br/api'
  })
}

api.feegow.defaults.headers.common = {
  "Content-Type": "application/json",
  "x-access-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmZWVnb3ciLCJhdWQiOiJwdWJsaWNhcGkiLCJpYXQiOiIxNy0wOC0yMDE4IiwibGljZW5zZUlEIjoiMTA1In0.UnUQPWYchqzASfDpVUVyQY0BBW50tSQQfVilVuvFG38"
}

export default api