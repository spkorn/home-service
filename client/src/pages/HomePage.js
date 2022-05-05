import "../App.css";
import HomePageHeader from "../components/HomePage/HomePageHeader";
import PopularService from "../components/HomePage/HomePagePopular";
import HomePageJobNotice from "../components/HomePage/HomePageJobNotice";
import Footer from "../components/HomePage/Footer";
import Nav from "../components/HomePage/Nav";

function HomePage() {
  return (
    <div className="home-page">
      <Nav />
      <HomePageHeader />
      <PopularService />
      <HomePageJobNotice />
      <Footer />
    </div>
  );
}

export default HomePage;
