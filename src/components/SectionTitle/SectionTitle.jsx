import React from "react"
import { Typography, Button } from "antd"
import "./SectionTitle.scss"

const { Title } = Typography

const SectionTitle = (props) => {
  return(
    <div className="section-title">
      <Title>{props.name}</Title>
      <div>
        <Button className="section-button section-button-active">{props.section1}</Button>
        <Button className="section-button">{props.section2}</Button>
      </div>
      
    </div>
  )
}

export default SectionTitle