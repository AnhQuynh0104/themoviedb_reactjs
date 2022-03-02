import { combineReducers } from "@reduxjs/toolkit"
import ListMovieReducer from "../components/ListMovie/ListMovie.reducer"
import ListActorReducer from "../components/ListActor/ListActor.reducer"

const rootReducer = combineReducers({
  listMovie: ListMovieReducer,
  listActor: ListActorReducer
})

export default rootReducer