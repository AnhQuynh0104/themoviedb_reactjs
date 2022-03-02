import React from "react"
import { Typography, Input, Col, Row, Button } from "antd"
import SectionTitle from "../../components/SectionTitle/SectionTitle"
import ListTvShow from "../../components/List/ListTvShow"
import ListMovie from "../../components/List/ListMovie"
import MainLayout from "../../layouts/MainLayout"
import "./Home.scss"

const { Title, Text } = Typography
const { Search } = Input

const Home = () => {
  return(
    <MainLayout>
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
        <ListTvShow type="tv" />
        <SectionTitle name="Trending" section1="Today" section2="This Week"/>
        <ListMovie type="movie"/>
        <div className="join-section">
          <Title>Join Today</Title>
          <Row>
            <Col className="join-section-left" span={14}>
              <Text>Get access to maintain your own <em>custom personal lists, track what you&apos;ve seen</em> and search and filter for 
                <em>what to watch next</em>- regardless if it&apos;s in theatres, on TV or available on popular streaming services like.</Text>
              <Button className="btn-signup">Sign Up</Button>
            </Col>
            <Col span={10}>
              <ul className="join-section-right">
                <li>Enjoy TMDB ad free</li>
                <li>Maintain a personal watchlist</li>
                <li>Filter by your subscribed streaming services and find something to watch</li>
                <li>Log the movies and TV shows you&apos;ve seen</li>
                <li>Build custom lists</li>
                <li>Contribute to and improve our database</li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </MainLayout>
  )
}

export default Home