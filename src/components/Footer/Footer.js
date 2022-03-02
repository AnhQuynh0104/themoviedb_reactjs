import React from "react"
import {Col, Row, Button, Typography} from "antd"
import LOGO from "../../assets/icons/logo-vertical.svg"
import "./Footer.scss"

const {Title, Text} = Typography

const Footer = () => {
  return(
    <Row className="footer">
      <Col span={5}></Col>
      <Col className="footer-logo" span={3}>
        <img className="logo" src={LOGO}></img>
        <Button className="footer-button">join the community</Button>
      </Col>
      <Col span={3}>
        <Title>the basics</Title>
        <Text>Introduce about TDBM</Text>
        <Text>Contact Us</Text>
        <Text>Support Forums</Text>
        <Text>API</Text>
        <Text>System Status</Text>
      </Col>
      <Col span={3}>
        <Title>get involed</Title>
        <Text>Contribution</Text>
        <Text>Add New Movie</Text>
        <Text>Add New TV Show</Text>
      </Col>
      <Col span={3}>
        <Title>Community</Title>
        <Text>Guildlines</Text>
        <Text>Discussions</Text>
        <Text>Leaderbroad</Text>
        <Text>Twitter</Text>
      </Col>
      <Col span={3}>
        <Title>legal</Title>
        <Text>Terms of Use</Text>
        <Text>API Terms of Use</Text>
        <Text>Privacy Police</Text>
      </Col>
      <Col span={6}></Col>
    </Row>
  )
}

export default Footer