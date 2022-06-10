import "../App.css";
import OrderDetail from "../components/AdminOrderPage/OrderDetail";
import SideBar from "../components/AdminSideBar";

function AdminOrderDetailPage() {
  return (
    <div className="admin-order-detail-page">
      <SideBar />
      <OrderDetail/>
    </div>
  );
}

export default AdminOrderDetailPage;
