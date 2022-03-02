import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import "./List.scss"
import ListItem from "./ListItem/ListItem"
import { fetchList } from "./List.thunk"
import { useParams } from "react-router-dom"

const ListTvShow = (props) => {


  const { listItem, loading, submitStatus } = useSelector(state => state.list)
  const dispatch = useDispatch()
  //const {type} = useParams()

  useEffect(() => {
    dispatch(fetchList(props.type))
  }, [dispatch])

  

  return(
    <div className="list">
      {props.type === "tv" && listItem.map((item, index) => (
        <ListItem key={index} name={item.name} poster_path={item.poster_path} first_air_date={item.first_air_date}/>
      ))}
      
    </div>
  )
}

export default ListTvShow