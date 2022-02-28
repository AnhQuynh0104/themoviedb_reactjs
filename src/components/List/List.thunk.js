import { createAsyncThunk } from "@reduxjs/toolkit"
import { getList } from "../../apis/list.api"

export const fetchList = createAsyncThunk(
  "list/fetchList",
  async(type) => {
    const response = await getList(type)
    return response.data
  }
)