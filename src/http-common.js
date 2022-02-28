import axios from "axios"
import { tmdb_link } from "./constants/path"

export default axios.create({
  baseURL: tmdb_link,
  headers: {
    "Content-type": "application/json"
  }
})