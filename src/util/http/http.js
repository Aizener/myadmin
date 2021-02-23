import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''
class HttpRequest {
  constructor () {
    this.axios = axios.create()
  }

  getConfig () {
    return {
      baseURL: baseURL,
      method: 'GET',
      headers: {
        //
      }
    }
  }

  setInterceptors (instance) {
    instance.interceptors.request.use(config => {
      console.log(config)
      return config
    })

    instance.interceptors.response.use(res => {
      return res.data
    })
  }

  request (params) {
    const config = Object.assign(this.getConfig(), params)
    this.setInterceptors(this.axios)
    return this.axios(config)
  }
}

export default new HttpRequest()
