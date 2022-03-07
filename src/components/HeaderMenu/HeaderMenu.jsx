import React, { useCallback } from "react"
import {useNavigate} from "react-router-dom"
import { Button, Dropdown, Menu, Layout} from "antd"
import { PlusOutlined, SearchOutlined } from "@ant-design/icons"
import DropdownMenu from "./DropdownMenu/DropdownMenu"
import LOGO from "../../assets/icons/logo.svg"
import "./HeaderMenu.scss"

const { Header } = Layout


const menuMovie = <DropdownMenu itemName={["Now Playing", "Popular", "Upcoming", "Top Rated"]} />
const menuTvshow = <DropdownMenu itemName={["Popular", "Airing Today", "Top Rated", "on TV"]} />
const menuPeople = <DropdownMenu itemName={["Popular People"]} />
const menuMore = <DropdownMenu itemName={["Discussions", "Leaderbroad", "Support", "API"]} />

const HeaderMenu = () => {
  const navigate = useNavigate()
  const handleMenuOnClick = () => {
    navigate("/")
  }
  
  return (
    <Header className="header">  
      <Menu className="menu" mode="horizontal">
        <div className="menu-left">
          <Menu.Item>
            <img className="logo" src={LOGO} onClick={handleMenuOnClick}></img>
          </Menu.Item>
          <Menu.Item>
            <Dropdown overlay={menuMovie} placement="bottomLeft">
              <Button className="menu-button">Movies</Button>
            </Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Dropdown overlay={menuTvshow} placement="bottomLeft">
              <Button className="menu-button">TV Shows</Button>
            </Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Dropdown overlay={menuPeople} placement="bottomLeft">
              <Button className="menu-button">People</Button>
            </Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Dropdown overlay={menuMore} placement="bottomLeft">
              <Button className="menu-button">More</Button>
            </Dropdown>
          </Menu.Item>
        </div>
        <div className="menu-right">
          <Menu.Item className="menu-button">
            <PlusOutlined />
          </Menu.Item>
          <Menu.Item className="menu-button">Sign In</Menu.Item>
          <Menu.Item className="menu-button">Join TMDB</Menu.Item>
          <Menu.Item className="menu-button">
            <SearchOutlined className="menu-button-search" />
          </Menu.Item>
        </div>
      </Menu>
    </Header>
      
  )
}

export default HeaderMenu