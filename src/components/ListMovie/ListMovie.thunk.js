import { createAsyncThunk } from "@reduxjs/toolkit"
import { getListMovie } from "../../apis/list.api"

export const fetchListMovie = createAsyncThunk(
  "listMovie/fetchListMovie",
  async() => {
    const response = await getListMovie()
    return response.data
  }
)