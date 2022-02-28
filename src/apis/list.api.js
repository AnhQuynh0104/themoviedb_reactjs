import { api_key, language_link } from "../constants/path"
import request from "../utils/request"

export const getList = (type) => {
  return request({
    url: `/${type}/popular${api_key}${language_link}`,
    method: "get",
    data: {}
  })
}

