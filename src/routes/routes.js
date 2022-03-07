import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CardItem from "../pages/CardItem/CardItem"
import CardPerson from "../pages/CardPerson/CardPerson"
import Home from "../pages/Home/Home"

const AppRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<CardItem />} />
        <Route path="/person/:id" element={<CardPerson />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes