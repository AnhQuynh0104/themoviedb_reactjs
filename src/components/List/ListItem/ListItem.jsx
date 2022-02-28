import React from "react"
import { Card } from "antd"
import { MoreOutlined } from "@ant-design/icons"
import DEMO from "../../../assets/images/demo.jpg"
import "./ListItem.scss"
import { image_link } from "../../../constants/path"


const { Meta } = Card
const ListItem = (props) => {
  return(
    <Card
      hoverable
      cover={<img alt="example" src={`${image_link}original${props.poster_path}`}/>}
      className="card"
    >
      <MoreOutlined rotate={90} className="icon-more"/>
      <Meta title={props.name} description={props.first_air_date} />
    </Card>
  )
}

export default ListItem