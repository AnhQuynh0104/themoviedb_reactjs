import { api_key, language_link } from "../constants/path"
import request from "../utils/request"

export const getListMovie = () => {
  return request({
    url: `/movie/popular${api_key}${language_link}`,
    method: "get",
    data: {}
  })
}


