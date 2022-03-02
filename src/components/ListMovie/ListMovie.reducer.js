import { createSlice } from "@reduxjs/toolkit"
import { fetchListMovie } from "./ListMovie.thunk"

const initialState = {
  listMovie: [],
  loading: false,
  error: "",
  submitStatus: 2
}

export const listSliceMovie = createSlice({
  name: "listMovie",
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchListMovie.pending, state => {
        state.loading = true
      })
      .addCase(fetchListMovie.fulfilled, (state, action) => {
        state.loading = false
        state.error = ""
        state.submitStatus = 2
        state.listMovie = [...action.payload.results]
      })
      .addCase(fetchListMovie.rejected, (state, action) => {
        state.loading = false
        state.submitStatus = 2
        state.error = action.error.message
      })
  } 
})


export default listSliceMovie.reducer
