import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import "./List.scss"
import ListItem from "./ListItem/ListItem"
import { fetchList } from "./List.thunk"

const List = (props) => {


  const { listItem, loading, submitStatus } = useSelector(state => state.list)
  const dispatch = useDispatch()

  useEffect(() => {
    if(props.type=="tv"){
      dispatch(fetchList("tv"))
    } else if(props.type=="movie") {
      dispatch(fetchList("movie"))
    }
  }, [dispatch])

  // useEffect(() => {
  //   dispatch(fetchList("movie"))
  // }, [dispatch])



  return(
    <div className="list">
      {listItem.map((item, index) => (
        <ListItem key={index} name={item.name} poster_path={item.poster_path} first_air_date={item.first_air_date}/>
      ))}
      
    </div>
  )
}

export default List