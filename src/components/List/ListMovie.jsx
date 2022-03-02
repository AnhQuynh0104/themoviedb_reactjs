import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchList } from "./List.thunk"
import ListItem from "./ListItem/ListItem"
import "./List.scss"

const ListMovie = (props) => {
  const { listItem, loading, submitStatus } = useSelector(state => state.list)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchList(props.type))
  }, [])


  return(
    <div className="list">
      {props.type === "movie" && listItem.map((item, index) => (
        <ListItem 
          key={index} 
          id={item.id}
          name={item.title} 
          poster_path={item.poster_path} 
          backdrop_path={item.backdrop_path}
          first_air_date={item.release_date} 
          overview={item.overview}
        />
      ))}
    </div>
  )
}

export default ListMovie
