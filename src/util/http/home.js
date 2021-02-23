import axios from './http.js'

export const getArticle = () => {
  return axios.request({
    url: '/getArticle',
    method: 'get'
  })
}

export const getSystemInfo = () => {
  return axios.request({
    url: '/system/info'
  })
}
