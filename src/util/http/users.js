import axios from './http.js'

export const findUsers = params => {
  return axios.request({
    url: '/users/',
    method: 'post',
    data: params
  })
}
