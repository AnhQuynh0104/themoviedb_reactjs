import React from "react"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { notification } from "antd"
import { fetchListMovie } from "./ListMovie.thunk"
import ItemMovie from "./ItemMovie/ItemMovie"
import "./ListMovie.scss"

const ListMovie = () => {
  const { listMovie, loading, submitStatus } = useSelector(state => state.listMovie)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchListMovie())
  }, [])

  useEffect(() => {
    if(!loading && submitStatus === 0){
      notification.error({
        message: "NOTIFICATION",
        description: "Loading images failed!",
        placement: "topRight"
      })
    }
  })

  return(
    <div className="list">
      {listMovie.map((item, index) => (
        <ItemMovie 
          key={index} 
          id={item.id}
          title={item.title} 
          poster_path={item.poster_path} 
          backdrop_path={item.backdrop_path}
          release_date={item.release_date} 
          overview={item.overview}
        />
      ))}
    </div>
  )
}

export default ListMovie
