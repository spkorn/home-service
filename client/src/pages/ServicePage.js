import ServicePageJobNotice from "../components/ServicePage/ServicesPageJobNotice";
import "../App.css";
import ServicePageHeader from "../components/ServicePage/ServicePageHeader";
import Footer from "../components/HomePage/Footer";
import Nav from "../components/HomePage/Nav";

function ServicePage() {
  return (
    <div className="service-page">
      <Nav />
      <ServicePageHeader />
    <ServicePageJobNotice /> 
      <Footer />
    </div>
  );
}
export default ServicePage;
