import "../App.css";
import AdminOrderList from "../components/AdminOrderPage/OrderList";
import AdminOrderHeader from "../components/AdminOrderPage/AdminOrderHeader";
import SideBar from "../components/AdminSideBar";
import { useUtils } from "../hooks/utils";

function AdminOrderPage() {
  const {
    searchOrder,
    setSearchOrder,
    allOrder,
    setAllOrder,
    searchOrderData,
  } = useUtils();
  return (
    <div className="admin-order-page">
      <SideBar />
      <AdminOrderHeader
        searchOrder={searchOrder}
        setSearchOrder={setSearchOrder}
        setAllOrder={setAllOrder}
        searchOrderData={searchOrderData}
      />
      <AdminOrderList allOrder={allOrder} />
    </div>
  );
}

export default AdminOrderPage;
