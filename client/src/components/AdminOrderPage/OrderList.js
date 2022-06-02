import "../../App.css";
import Moment from "react-moment";
import { useState } from "react";
import axios from "axios";
import EditAlertBox from "../AlertBox";

function AdminOrderList(props) {
  const { allOrder, searchOrderData } = props;
  const [status, setStatus] = useState("");
  const [editAlert, setEditAlert] = useState(false);
  const [orderHistoryId, setOrderHistoryId] = useState(0);

  const updateStatusById = async () => {
    await axios.put(`http://localhost:4000/orderHistory/${orderHistoryId}`, {
      status,
    });
  };

  const edited = () => {
    updateStatusById();
    searchOrderData();
    document.getElementById("popUp").style.display = "none";
    setEditAlert(false);
  };

  const hide = () => {
    setStatus("");
    document.getElementById("popUp").style.display = "none";
    setEditAlert(false);
  };

  return (
    <div className="min-h-screen bg-bg p-[41px] pb-24">
      <div className="ml-60 rounded-[5px] border border-grey200 h-full">
        <table className="table-fixed w-full text-left">
          <thead className="bg-grey100 text-grey700 text-sm">
            <tr>
              <th className="py-3 font-normal text-center">
                รหัสคำสั่งการซ่อม
              </th>
              <th className="py-3 font-normal">ชื่อบริการ</th>
              <th className="py-3 font-normal w-[170px]">พนักงาน</th>
              <th className="py-3 font-normal">สถานะ</th>

              <th className="py-3 font-normal w-[270px]">Customer Email</th>
              <th className="py-3 font-normal w-[185px]">วันเวลาดำเนินการ</th>
            </tr>
          </thead>
        </table>
        <table className="bg-white rounded-b-[5px] table-fixed w-full">
          <tbody>
            {allOrder.map((data, index) => {
              return (
                <tr className="border-t border-grey200" key={index}>
                  <td className="font-light text-center h-24">
                    {data.order_number}
                  </td>
                  <td className="font-light">{data.service_name}</td>
                  <td className="font-light w-[170px]">
                    {data.serviceman_name}
                  </td>
                  <td className="font-light mr-6">
                    <div className="dropdown cursor-pointer">
                      {data.status === "รอดำเนินการ" ? (
                        <div className="bg-grey200 text-grey900 px-2.5 py-1 rounded-lg text-xs">
                          {data.status}
                        </div>
                      ) : data.status === "กำลังดำเนินการ" ? (
                        <div className="bg-yellow100 text-yellow900 px-2.5 py-1 rounded-lg text-xs">
                          {data.status}
                        </div>
                      ) : (
                        <div className="bg-green100 text-green900 px-2.5 py-1 rounded-lg text-xs">
                          {data.status}
                        </div>
                      )}
                      <div className="dropdown-content cursor-pointer w-36">
                        <div
                          className="ml-4"
                          onClick={() => {
                            setStatus("รอดำเนินการ");
                            setOrderHistoryId(data.order_history_id);
                            setEditAlert(true);
                          }}
                        >
                          <p>รอดำเนินการ</p>
                        </div>
                        <div
                          className="ml-4"
                          onClick={() => {
                            setStatus("กำลังดำเนินการ");
                            setOrderHistoryId(data.order_history_id);
                            setEditAlert(true);
                            console.log(orderHistoryId);
                          }}
                        >
                          <p>กำลังดำเนินการ</p>
                        </div>
                        <div
                          className="ml-4"
                          onClick={() => {
                            setStatus("ดำเนินการสำเร็จ");
                            setOrderHistoryId(data.order_history_id);
                            setEditAlert(true);
                          }}
                        >
                          <p>ดำเนินการสำเร็จ</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-light w-[270px]">{data.email}</td>
                  <td className="font-light mr-6 w-[185px]">
                    <Moment format="DD/MM/YYYY hh:mm A">
                      {data.service_date_time}
                    </Moment>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {editAlert ? (
          <EditAlertBox
            deleteFunction={edited}
            hideFunction={hide}
            textAlert="ยืนยันการแก้ไข"
            alertQuestion="คุณต้องการแก้ไขสถานะ ใช่หรือไม่ ?"
            primary="ยืนยัน"
            secondary="ยกเลิก"
          />
        ) : null}
      </div>
    </div>
  );
}

export default AdminOrderList;
