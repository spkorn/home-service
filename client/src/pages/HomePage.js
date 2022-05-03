import "../App.css";
import { css } from "@emotion/react";
import HomePageHeader from "../components/HomePage/HomePageHeader";
import PopularService from "../components/HomePage/HomePagePopular";
import HomePageJobNotice from "../components/HomePage/HomePageJobNotice";
import Footer from '../Components/Footer.js'
import NavNonLogin from '../Components/NavNonLogin.js'


function HomePage() {
  return (
    <div className="home-page">
    <NavNonLogin />
      <HomePageHeader />
      <PopularService/>
    <HomePageJobNotice />
    <Footer />
    </div>
  )
}

export default HomePage
