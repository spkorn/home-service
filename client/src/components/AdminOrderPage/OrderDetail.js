import { useNavigate, useParams } from "react-router-dom";
import "../../App.css";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import axios from "axios";
import AdminEditedHeader from "../../components/AdminEditedHeader";
import image from "../../CustomerPhoto/imageIndex";
import EditAlertBox from "../AlertBox";
import { useUtils } from "../../hooks/utils";

function OrderDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const { status, setStatus, editAlert, setEditAlert, updateStatusById } =
    useUtils();
  const [orderByorderHistoryId, setOrderByorderHistoryId] = useState([]);
  const [orderNumber, setOrderNumber] = useState("");

  const edited = () => {
    updateStatusById(params.orderHistoryId, { status });
    document.getElementById("popUp").style.display = "none";
    setEditAlert(false);
  };

  const hide = () => {
    setStatus("");
    document.getElementById("popUp").style.display = "none";
    setEditAlert(false);
  };

  const getOrderDetailByorderHistoryId = async (orderHistoryId) => {
    const result = await axios.get(
      `http://localhost:4000/orderHistoryByOrderHistoryId/${orderHistoryId}`
    );
    setOrderByorderHistoryId(result.data.data);
    setOrderNumber(result.data.data[0].order_number);
  };

  useEffect(() => {
    getOrderDetailByorderHistoryId(params.orderHistoryId);
  }, [orderByorderHistoryId]);

  return (
    <div className="pl-60 bg-bg pb-4 h-screen">
      <AdminEditedHeader
        title="รายการคำสั่งซ่อม"
        name={orderNumber}
        back={() => navigate("/order-dashboard")}
      />
      <section className="py-10">
        {orderByorderHistoryId.map((order, index) => {
          return (
            <div
              className="p-10 mx-10 mb-8 bg-white border border-grey300 rounded-lg h-full flex justify-between"
              key={index}
            >
              <div>
                <div className="text-xl font-medium leading-[150%]">
                  คำสั่งการซ่อมรหัส : {order.order_number}
                </div>
                <div className=" flex flex-col gap-y-[9px] mt-3 mb-5 text-sm font-normal leading-[150%] text-grey700">
                  <div className="flex gap-x-[14.5px]">
                    <img
                      className="w-5 h-5"
                      alt="Calendar Icon"
                      src={image.calendarIcon}
                    />
                    <div>
                      วันเวลาดำเนินการ:{" "}
                      <Moment format="DD MMMM YYYY HH:mm">
                        {order.service_date_time}
                      </Moment>{" "}
                      น.
                    </div>
                  </div>
                  <div className="flex gap-x-[14.5px]">
                    <img
                      className="w-5 h-5"
                      alt="Person Icon"
                      src={image.personIcon2}
                    />
                    <div>พนักงาน: {order.serviceman_name}</div>
                  </div>
                  <div className="flex gap-x-[14.5px]">
                    <img
                      className="h-4 w-5"
                      alt="Customer Name Icon"
                      src={image.name}
                    />
                    <div>Customer: {order.name}</div>
                  </div>
                  <div className="flex gap-x-[14.5px]">
                    <img
                      className="h-5 w-5"
                      alt="email Icon"
                      src={image.email}
                    />
                    <div>อีเมล: {order.email}</div>
                  </div>
                  <div className="flex gap-x-[14.5px]">
                    <img
                      className="h-3.5 w-5"
                      alt="Phonenumber Icon"
                      src={image.PhoneNumber}
                    />
                    <div>เบอร์โทรศัพท์: {order.phonenumber}</div>
                  </div>
                  <div className="flex gap-x-[14.5px]">
                    <img
                      className="w-5 h-5"
                      alt="Address Icon"
                      src={image.Home}
                    />
                    <div>
                      ที่อยู่: {order.address} {order.sub_district}{" "}
                      {order.district} {order.province} {order.zipcode}
                    </div>
                  </div>
                  <div className="flex gap-x-[14.5px]">
                    <img
                      className="h-3.5 w-5"
                      alt="Pen Icon"
                      src={image.penIcon}
                    />
                    <div>ข้อมูลเพิ่มเติม: {order.note}</div>
                  </div>
                </div>
                <div className="text-base font-normal ] text-black">
                  รายการ: {order.service_name}
                  <ul className="flex flex-col list-disc ml-3">
                    {order.sub_service.map((data, index) => {
                      return (
                        <li
                          key={index}
                          className="ml-2 my-1 font-normal text-sm"
                        >
                          {data.sub_service_name}, {data.sub_service_quantity}{" "}
                          {data.unit}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-y-12">
                <div className="flex flex-col gap-y-[13px]">
                  <div className="text-grey700 font-normal text-sm leading-[150%] flex gap-x-3 justify-end items-center">
                    สถานะ:{" "}
                    <div className="dropdown cursor-pointer">
                      {order.status === "รอดำเนินการ" ? (
                        <div className="bg-grey200 text-grey900 text-sm font-normal px-3 py-[2px] rounded-[99px]">
                          {order.status}
                        </div>
                      ) : order.status === "กำลังดำเนินการ" ? (
                        <div className="bg-yellow100 text-yellow900 text-sm font-normal px-3 py-[2px] rounded-[99px]">
                          {order.status}
                        </div>
                      ) : (
                        <div className="bg-green100 text-green900 text-sm font-normal px-3 py-[2px] rounded-[99px]">
                          {order.status}
                        </div>
                      )}
                      <div className="dropdown-content cursor-pointer w-36">
                        <div
                          className="ml-4"
                          onClick={() => {
                            setStatus("รอดำเนินการ");
                            setEditAlert(true);
                          }}
                        >
                          <p>รอดำเนินการ</p>
                        </div>
                        <div
                          className="ml-4"
                          onClick={() => {
                            setStatus("กำลังดำเนินการ");
                            setEditAlert(true);
                          }}
                        >
                          <p>กำลังดำเนินการ</p>
                        </div>
                        <div
                          className="ml-4"
                          onClick={() => {
                            setStatus("ดำเนินการสำเร็จ");
                            setEditAlert(true);
                          }}
                        >
                          <p>ดำเนินการสำเร็จ</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-grey700 font-normal text-sm leading-[150%] flex gap-x-5 justify-end items-center">
                    ราคารวม:
                    <div className="text-lg text-black font-medium leading-[150%]">
                      {Number(order.total_price).toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}{" "}
                      ฿
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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
      </section>
    </div>
  );
}

export default OrderDetail;
