import image from "../CustomerPhoto/imageIndex";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Moment from "react-moment";

function Activity() {
  const params = useParams();
  const [order, setOrder] = useState([]);

  const getOrderHistoryById = async (userId) => {
    const result = await axios.get(
      `http://localhost:4000/orderHistory/${userId}`
    );
    setOrder(result.data.data);
  };

  console.log(order);

  useEffect(() => {
    getOrderHistoryById(params.userId);
  }, []);

  return (
    <div>
      {order.length === 0 ? (
        <div
          className="p-6 w-[50vw] ml-10 mb-8 bg-white border border-grey300 rounded-lg"
        >
          <h1 className="text-grey700 text-2xl font-normal text-center">ไม่มีประวัติการซ่อม</h1>
        </div>
      ) : (
        <div>
          {order.map((subOrder, index) => {
            return (
              <div
                className="p-6 w-[50vw] ml-10 mb-8 bg-white border border-grey300 rounded-lg flex justify-between"
                key={index}
              >
                <div>
                  <div className="text-xl font-medium leading-[150%]">
                    คำสังการซ่อมรหัส : {subOrder.order_number}
                  </div>
                  <div className="h-12  flex flex-col gap-y-[9px] mt-3 mb-5 text-sm font-normal leading-[150%] text-grey700">
                    <div className="flex gap-x-[14.5px]">
                      <img
                        className="w-5 h-5"
                        alt="Calendar Icon"
                        src={image.calendarIcon}
                      />
                      <div>
                        วันเวลาดำเนินการ:{" "}
                        <Moment format="DD MMMM YYYY HH:mm">
                          {subOrder.service_date_time}
                        </Moment>
                      </div>
                    </div>
                    <div className="flex gap-x-[14.5px]">
                      <img
                        className="w-5 h-5"
                        alt="Person Icon"
                        src={image.personIcon2}
                      />
                      <div>พนักงาน: {subOrder.serviceman_name}</div>
                    </div>
                  </div>
                  <div className="text-base font-normal leading-[150%] text-grey700">
                    รายการ:{" "}
                    {order
                      .filter(
                        (item) => item.order_number === subOrder.order_number
                      )
                      .map((subService, index) => {
                        return (
                          <div key={index}>{subService.sub_service_name}</div>
                        );
                      })}
                  </div>
                </div>
                <div className="flex flex-col gap-y-12">
                  <div className="h-[65px] flex flex-col gap-y-[13px]">
                    <div className="text-grey700 font-normal text-sm leading-[150%] flex gap-x-3 justify-end items-center">
                      สถานะ: <div>{subOrder.status}</div>
                    </div>
                    <div className="text-grey700 font-normal text-sm leading-[150%] flex gap-x-5 justify-end items-center">
                      ราคารวม:
                      <div className="text-lg text-black font-medium leading-[150%]">
                        {Number(subOrder.total_price).toLocaleString(
                          undefined,
                          {
                            maximumFractionDigits: 2,
                          }
                        )}{" "}
                        ฿
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Activity;
