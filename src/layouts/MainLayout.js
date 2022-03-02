import React from "react"
import { Layout } from "antd"
import HeaderMenu from "../components/HeaderMenu/HeaderMenu"
import Home from "../pages/Home/Home"
import Footer from "../components/Footer/Footer"

const MainLayout = (props) => {
  return (
    <Layout className="app">
      <HeaderMenu></HeaderMenu>
      {props.children}
      <Footer></Footer>
    </Layout>  
  )
}

export default MainLayout