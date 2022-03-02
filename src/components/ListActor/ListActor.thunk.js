import { getActor } from "../../apis/actor.api"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchListActor = createAsyncThunk(
  "listActor/fetchListActor",
  async(id) => {
    const response = await getActor(id)
    return response.data
  }
)