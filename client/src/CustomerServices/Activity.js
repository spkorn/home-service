import image from "../CustomerPhoto/imageIndex";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Activity() {
  const params = useParams();
  const [order, setOrder] = useState([]);
  const getOrderHistoryById = async (userId) => {
    const result = await axios.get(
      `http://localhost:4000/orderHistory/${userId}`
    );
    setOrder(result.data.data);
  };

  useEffect(() => {
    getOrderHistoryById(params.serviceId);
  }, []);
  return (
    <div>
      {order.map((data, index) => {
        <div className="px-6 pt-[22px] pb-6 w-[53vw] bg-white border border-grey300 rounded-lg flex justify-between">
        <div>
          <div className="text-xl font-medium leading-[150%]">
            คำสังการซ่อมรหัส : {data.checkout_id}
          </div>
          <div className="h-12  flex flex-col gap-y-[9px] mt-3 mb-5 text-sm font-normal leading-[150%] text-grey700">
            <div className="flex gap-x-[14.5px]">
              <img
                className="w-5 h-5"
                alt="Calendar Icon"
                src={image.calendarIcon}
              />
              <div>วันเวลาดำเนินการ: {data.service_date_time}</div>
            </div>
            <div className="flex gap-x-[14.5px]">
              <img
                className="w-5 h-5"
                alt="Person Icon"
                src={image.personIcon2}
              />
              <div>พนักงาน: {data.serviceman_name}</div>
            </div>
          </div>
          <div className="text-base font-normal leading-[150%] text-grey700">
            รายการ:
          </div>
        </div>
        <div className="flex flex-col gap-y-12">
          <div className="h-[65px] flex flex-col gap-y-[13px]">
            <div className="text-grey700 font-normal text-sm leading-[150%] flex gap-x-3 justify-end items-center">
              สถานะ: <div>{data.status}</div>
            </div>
            <div className="text-grey700 font-normal text-sm leading-[150%] flex gap-x-5 justify-end items-center">
              ราคารวม:
              <div className="text-lg text-black font-medium leading-[150%]">
            {Number(data.total_price).toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}{" "}
            ฿
              </div>
            </div>
          </div>
        </div>
      </div>
      })}
      
    </div>
  );
}

export default Activity;
