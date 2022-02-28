import React from "react"
import { Typography, Input } from "antd"
import "./Home.scss"
import SectionTitle from "../../components/SectionTitle/SectionTitle"
import List from "../../components/List/List"

const { Title, Text } = Typography
const { Search } = Input

const Home = () => {
  return(
    <div className="home">
      <div className="jumbotron">
        <div className="jumbotron-inner">
          <Title>Welcome</Title>
          <Text>Millions of movies, TV shows and people to discover. Explore now.</Text>
          <Search
            className="input-search"
            placeholder="Search for tv shows, movies, persons..."
            allowClear
            enterButton="Search"
            size="large"
          />
        </div>
      </div>
      <SectionTitle name="What's Popular" section1="On TV" section2="In Theater"/>
      <List type="movie" />
      <SectionTitle name="Trending" section1="Today" section2="This Week"/>
    </div>
    
  )
}

export default Home