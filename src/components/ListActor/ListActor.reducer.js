import { createSlice } from "@reduxjs/toolkit"
import { fetchListActor } from "./ListActor.thunk"

const initialState = {
  listActor: [],
  loading: false,
  error: "",
  submitStatus: 2
}

export const listActorSlice = createSlice({
  name: "listActor",
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchListActor.pending, state => {
        state.loading = true
      })
      .addCase(fetchListActor.fulfilled, (state, action) => {
        state.loading = false
        state.error = ""
        state.submitStatus = 2
        state.listActor = [...action.payload.results]
      })
      .addCase(fetchListActor.rejected, (state, action) => {
        state.loading = false
        state.submitStatus = 2
        state.error = action.error.message
      })
  } 
})


export default listActorSlice.reducer
