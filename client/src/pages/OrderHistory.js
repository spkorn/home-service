import "../App.css";
import Nav from "../components/Nav";
import Activity from "../components/CustomerPage/Activity";
import NavBar from "../components/CustomerPage/NavBar";
import Footer from "../components/Footer";
import Title from "../components/CustomerPage/Title";

function OrderHistory() {
  return (
    <div className="bg-bg">
      <Nav />
      <Title title="ประวัติการซ่อม" />
      <div className="flex my-8 mx-0 justify-between px-[15vw] ">
        <NavBar />
        <Activity />
      </div>
      <Footer />
    </div>
  );
}
export default OrderHistory;
