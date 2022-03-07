import React from "react"
import { Card } from "antd"
import { image_link } from "../../../constants/path"
import "./ItemActor.scss"

const { Meta } = Card

const ItemActor = (props) => {
  return(
    <Card
      hoverable
      cover={<img alt="example" src={`${image_link}original${props.profile_path}`} />}
      className="card-actor"
      //onClick={handleOnClickCard}
    >
      <Meta title={props.name} description={props.character} />
    </Card>
  )
}

export default ItemActor