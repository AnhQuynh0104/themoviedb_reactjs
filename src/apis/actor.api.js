import { api_key, language_link } from "../constants/path"
import request from "../utils/request"

export const getActor = (id) => {
  return request({
    url: `/movie/${id}/credits/${api_key}${language_link}`,
    method: "get", 
    data: {}
  })
}