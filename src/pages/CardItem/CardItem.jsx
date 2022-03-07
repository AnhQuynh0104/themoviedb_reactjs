import React from "react"
import { useLocation } from "react-router-dom"
import { Typography } from "antd"
import { UnorderedListOutlined, HeartOutlined, StarOutlined } from "@ant-design/icons"
import { image_link } from "../../constants/path"
import SubMenu from "../../components/HeaderMenu/SubMenu/SubMenu"
import MainLayout from "../../layouts/MainLayout"
import "./CardItem.scss"
import ListActor from "../../components/ListActor/ListActor"

const { Title, Text } = Typography

const CardItem = () => {

  const location = useLocation()
  let date = location.state.release_date.substring(0,4)
  let backdrop_path = `${image_link}original${location.state.backdrop_path}`

  return(
    <MainLayout>
      <div className="card-item">
        <SubMenu />
        <div className="jumbotron" style={{backgroundImage: `url(${backdrop_path})`}}>
          <img className="poster-path" src={`${image_link}original${location.state.poster_path}`}></img>
          <div className="content">
            <div className="title">
              <Title>{location.state.title}
                <span className="date">  ({date})</span>
              </Title>
            </div>
            <div className="judge">
              <Text>User Score</Text>
              <div className="icon">
                <UnorderedListOutlined />
              </div>
              <div className="icon">
                <HeartOutlined />
              </div>
              <div className="icon">
                <StarOutlined />
              </div>
            </div>
            <Text className="overview">Overview</Text>
            <p>{location.state.overview}</p>
            <Text className="name">Steven Knight</Text>
            <p>Director</p>
          </div>
        </div>
      </div>
      <ListActor id={location.state.id} />
    </MainLayout>
  )
}

export default CardItem