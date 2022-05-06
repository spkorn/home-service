import "../App.css";
import ServicePageHeader from "../components/ServicePage/ServicePageHeader";
import Footer from "../components/HomePage/Footer";
import Nav from "../components/HomePage/Nav";

function HomePage() {
  return (
    <div className="home-page">
      <Nav />
      <ServicePageHeader /> 
      <Footer />
    </div>
  );
}

export default HomePage;
