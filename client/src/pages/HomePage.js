import "../App.css";
import { css } from "@emotion/react";
import HomePageHeader from "../components/HomePageHeader";
import PopularService from "../components/popular-service";


function HomePage() {
  return (
    <div className="home-page">
      <HomePageHeader />
      <PopularService/>
    </div>
  );
}

export default HomePage;
