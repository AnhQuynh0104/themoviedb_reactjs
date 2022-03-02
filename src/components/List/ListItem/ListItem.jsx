import React, { useCallback } from "react"
import { Card } from "antd"
import { MoreOutlined } from "@ant-design/icons"
import DEMO from "../../../assets/images/demo.jpg"
import "./ListItem.scss"
import { image_link } from "../../../constants/path"
import { useNavigate } from "react-router-dom"


const { Meta } = Card
const ListItem = (props) => {
  const navigate = useNavigate()

  const handleOnClickCard = useCallback(() =>
    navigate(`/movie/${props.id}`, 
      {state: {
        poster_path: props.poster_path, 
        backdrop_path: props.backdrop_path,
        name: props.name, 
        date: props.first_air_date, 
        overview: props.overview,
      }}, [navigate])
  )

  return(
    <Card
      hoverable
      cover={<img alt="example" src={`${image_link}original${props.poster_path}`}/>}
      className="card"
      onClick={handleOnClickCard}
    >
      <MoreOutlined rotate={90} className="icon-more"/>
      <Meta title={props.name} date={props.first_air_date} />
    </Card>
  )
}

export default ListItem