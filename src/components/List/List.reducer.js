import { createSlice } from "@reduxjs/toolkit"
import { fetchList } from "./List.thunk"

const initialState = {
  listItem: [],
  loading: false,
  error: "",
  submitStatus: 2
}

export const listSlice = createSlice({
  name: "list",
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchList.pending, state => {
        state.loading = true
      })
      .addCase(fetchList.fulfilled, (state, action) => {
        state.loading = false
        state.error = ""
        state.submitStatus = 2
        state.listItem = [...action.payload.results]
      })
      .addCase(fetchList.rejected, (state, action) => {
        state.loading = false
        state.submitStatus = 2
        state.error = action.error.message
      })
  } 
})


export default listSlice.reducer
