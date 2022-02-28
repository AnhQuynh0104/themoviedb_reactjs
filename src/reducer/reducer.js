import { combineReducers } from "@reduxjs/toolkit"
import ListReducer from "../components/List/List.reducer"

const rootReducer = combineReducers({
  list: ListReducer
})

export default rootReducer