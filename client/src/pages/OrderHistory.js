import "../App.css";
import Nav from "../components/Nav";
import Activity from "../components/CustomerPage/Activity";
import NavBar from "../components/CustomerPage/NavBar";
import Footer from "../components/Footer";

function OrderHistory() {
  return (
    <div className="bg-bg">
      <Nav />
      <div className="h-24 bg-blue600 flex items-center justify-center ">
        <h1 className="text-white text-[32px] font-medium">ประวัติการซ่อม</h1>
          </div>
          <div className="flex my-8 mx-0 justify-between px-[15vw] ">
      <NavBar />
              <Activity />
          </div>
      <Footer />
    </div>
  );
}
export default OrderHistory;
