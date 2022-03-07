import { Typography } from "antd"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchListActor } from "./ListActor.thunk"
import ItemActor from "./ItemActor/ItemActor"
import "./ListActor.scss"

const { Title } = Typography

const ListActor = (props) => {

  const { listActor, loading, submitStatus } = useSelector(state => state.listActor)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchListActor(props.id))
    console.log(listActor)
  }, [])
  return (
    <div className="list-actor">
      <Title>Series Cast</Title>
      <div className="list">
        {listActor.map((actor, index) => (
          <ItemActor key={index} 
            name={actor.name} 
            character={actor.character}
            profile_path={actor.profile_path}>
          </ItemActor>
        ))}
      </div>
    </div>
  )
}

export default ListActor