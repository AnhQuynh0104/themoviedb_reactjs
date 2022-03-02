import React from "react"
import { Menu, Layout, Button, Dropdown } from "antd"
import { CaretDownOutlined } from "@ant-design/icons"
import DropdownMenu from "../DropdownMenu/DropdownMenu"
import "./SubMenu.scss"

const { Header } = Layout


const SubMenu = () => {
  const overview = <DropdownMenu itemName={["Main", "Alternative Title", "Cast & Crew", "Episode Groups", "Season", "Translations", "Changes"]} />
  const media = <DropdownMenu itemName={["Backdrops", "Logos", "Posters", "Videos"]} />
  const fandom = <DropdownMenu itemName={["Discussions", "Reviews"]} />
  const share = <DropdownMenu itemName={["Share Link", "Facebook", "Tweet"]} />
  return(
    <Header className="submenu-header">  
      <Menu className="menu" mode="horizontal">
        <Menu.Item>
          <Dropdown overlay={overview} placement="bottomLeft">
            <Button className="menu-button">
              Overview
              <CaretDownOutlined />
            </Button>
          </Dropdown>
        </Menu.Item>
        <Menu.Item>
          <Dropdown overlay={media} placement="bottomLeft">
            <Button className="menu-button">
              Media
              <CaretDownOutlined />
            </Button>
          </Dropdown>
        </Menu.Item>
        <Menu.Item>
          <Dropdown overlay={share} placement="bottomLeft">
            <Button className="menu-button">
              Share
              <CaretDownOutlined />
            </Button>
          </Dropdown>
        </Menu.Item>
        <Menu.Item>
          <Dropdown overlay={share} placement="bottomLeft">
            <Button className="menu-button">
              Fandom
              <CaretDownOutlined />
            </Button>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </Header>
  )
}

export default SubMenu