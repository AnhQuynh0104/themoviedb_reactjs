import React from "react"
import { Layout } from "antd"
import HeaderMenu from "../components/HeaderMenu/HeaderMenu"
import Home from "../pages/Home/Home"

const App = () => {
  return (
    <Layout className="app">
      <HeaderMenu></HeaderMenu>
      <Home></Home>
    </Layout>
    
  )
}

export default App