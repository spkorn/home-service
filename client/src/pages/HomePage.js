import "../App.css";
import { css } from "@emotion/react";
import HomePageHeader from "../components/HomePage/HomePageHeader";
import PopularService from "../components/HomePage/HomePagePopular";
import HomePageJobNotice from "../components/HomePage/HomePageJobNotice";


function HomePage() {
  return (
    <div className="home-page">
      <HomePageHeader />
      <PopularService/>
    <HomePageJobNotice />
    </div>
  )
}

export default HomePage;
