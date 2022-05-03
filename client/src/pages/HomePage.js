import "../App.css";
import { css } from "@emotion/react";
import HomePageHeader from "../components/HomePageHeader";
import PopularService from "../components/popular-service";
import HomePageJobNotice from "../components/HomePageJobNotice";


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
