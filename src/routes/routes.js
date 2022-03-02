import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CardItem from "../pages/CardItem/CardItem"
import Home from "../pages/Home/Home"

const AppRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<CardItem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes