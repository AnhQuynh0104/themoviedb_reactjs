import axios from "axios"

const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

const requestInterceptor = service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (!error.status) {
      return Promise.reject(new Error("Cannot connect to server!"))
    }
    if (error.response.status === 401 && error.response.config) {
      axios.interceptors.response.eject(requestInterceptor)
      return service({
        url: "/authentication/refresh",
        method: "get"
      }).catch(() => {
        return Promise.reject(
          new Error("Your session is expired! Please try again later!")
        )
      })
    }
    if (error.response.status === 400) {
      return Promise.reject(new Error("Wrong credentials provided"))
    }
    if (error.response.status === 403) {
      return Promise.reject(new Error("You don't have access this"))
    }
    if (error.response.status === 404) {
      return Promise.reject(new Error("Not found"))
    }
    if (error.response.status === 500) {
      return Promise.reject(
        new Error(error.response.message || "Internal Server Error")
      )
    }
    return Promise.reject(new Error("Failed"))
  }
)

export default service
