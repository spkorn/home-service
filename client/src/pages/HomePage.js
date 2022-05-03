import "../App.css";
import HomePageHeader from "../components/HomePage/HomePageHeader";
import PopularService from "../components/HomePage/HomePagePopular";
import HomePageJobNotice from "../components/HomePage/HomePageJobNotice";
import Footer from "../components/HomePage/Footer";
import NavNonLogin from "../components/HomePage/NavNonLogin";

function HomePage() {
  return (
    <div className="home-page">
      <NavNonLogin />
      <HomePageHeader />
      <PopularService />
      <HomePageJobNotice />
      <Footer />
    </div>
  );
}

export default HomePage;
