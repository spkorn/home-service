import "../../App.css";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";

function AdminOrderList(props) {
  const { allOrder} = props;

  const navigate = useNavigate();

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
              <th className="py-3 font-normal">พนักงาน</th>
              <th className="py-3 font-normal">สถานะ</th>
              <th className="py-3 font-normal">วันเวลาดำเนินการ</th>
            </tr>
          </thead>
        </table>
        <table className="bg-white rounded-b-[5px] table-fixed w-full">
          <tbody>
            {allOrder.map((data, index) => {
              return (
                <tr className="border-t border-grey200" key={index}>
                  <td
                    className="btn-ghost text-center h-24 cursor-pointer"
                    onClick={() =>
                      navigate(`/order/detail/${data.order_history_id}`)
                    }
                  >
                    {data.order_number}
                  </td>
                  <td className="font-light">{data.service_name}</td>
                  <td className="font-light">
                    {data.serviceman_name}
                  </td>
                  <td className="font-light mr-6">
                      {data.status === "รอดำเนินการ" ? (
                        <div className="w-fit bg-grey200 text-grey900 px-2.5 py-1 rounded-lg text-xs">
                          {data.status}
                        </div>
                      ) : data.status === "กำลังดำเนินการ" ? (
                        <div className="w-fit bg-yellow100 text-yellow900 px-2.5 py-1 rounded-lg text-xs">
                          {data.status}
                        </div>
                      ) : (
                        <div className="w-fit bg-green100 text-green900 px-2.5 py-1 rounded-lg text-xs">
                          {data.status}
                        </div>
                      )}
                  </td>
                  <td className="font-light mr-6">
                    <Moment format="DD/MM/YYYY HH:mm">
                      {data.service_date_time}
                    </Moment>{" "}
                    น.
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminOrderList;
