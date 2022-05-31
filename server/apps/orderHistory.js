import { Router } from "express";
import { pool } from "../utils/db.js";
import { protect } from "../middlewares/protects.js";

const orderHistoryRouter = Router();

// API route to view order history by userId
orderHistoryRouter.get("/:id", async (req, res) => {
  const orderHistoryByUserId = req.params.id;

  const result = await pool.query(
    `select order_history.order_number, checkout.service_date_time, order_history.status, serviceman_detail.serviceman_name, 
    service.service_name, sub_service.sub_service_name, checkout_quantity.sub_service_quantity, sub_service.unit, checkout.total_price    
    from order_history
        inner join checkout
        on order_history.checkout_id = checkout.checkout_id
        inner join serviceman_detail
        on serviceman_detail.serviceman_detail_id = order_history.serviceman_detail_id
        inner join users
        on users.user_id = order_history.user_id
        inner join checkout_quantity
        on checkout_quantity.checkout_id = checkout.checkout_id
        inner join sub_service
        on checkout_quantity.sub_service_id = sub_service.sub_service_id
        inner join service
        on service.service_id = sub_service.service_id
        where users.user_id = $1`,
    [orderHistoryByUserId]
  );

  const newResult = [
    {
      order_number: "",
      service_date_time: "",
      status: "",
      serviceman_name: "",
      service_name: "",
      sub_service: [
        { sub_service_name: "", sub_service_quantity: 0, unit: "" },
      ],
      total_price: "",
    },
  ];

  const jsonObj = {
    order_number: "",
    service_date_time: "",
    status: "",
    serviceman_name: "",
    service_name: "",
    sub_service: [{ sub_service_name: "", sub_service_quantity: 0, unit: "" }],
    total_price: "",
  };

  function removeDuplicates(data, key) {
    return [...new Map(data.map((item) => [key(item), item])).values()];
  }

  // ตัวแปรนี้คือทำให้จำนวน index ของ array object เหลือเท่ากับจำนวน order_number
  let countOrderNumber = removeDuplicates(
    result.rows,
    (item) => item.order_number
  );

  let countSubService = [];
  let setOrderNumber = [];
  let orderNumber = "";

  for (let j = 0; j < countOrderNumber.length; j++) {
    orderNumber = countOrderNumber[j].order_number;
    setOrderNumber.push(orderNumber);
  }

  for (let i = 0; i < countOrderNumber.length; i++) {
    if (newResult.length < countOrderNumber.length) {
      newResult.push(jsonObj);
    }
    newResult[i].order_number = countOrderNumber[i].order_number;
    newResult[i].service_date_time = countOrderNumber[i].service_date_time;
    newResult[i].status = countOrderNumber[i].status;
    newResult[i].serviceman_name = countOrderNumber[i].serviceman_name;
    newResult[i].service_name = countOrderNumber[i].service_name;
    newResult[i].total_price = countOrderNumber[i].total_price;

    let subService = 0;
    // loop นี้ นับจำนวน sub_service ของแต่ละ order_number แล้วเก็บใส่ array
    for (let j = 0; j < result.rows.length; j++) {
      if (newResult[i].order_number === result.rows[j].order_number) {
        subService++;
      }
    }

    countSubService.push(subService);

    for (let j = 0; j < countSubService[i]; j++) {
      newResult[i].sub_service[j].sub_service_name =
        result.rows[j].sub_service_name;
      newResult[i].sub_service[j].sub_service_quantity =
        result.rows[j].sub_service_quantity;
      newResult[i].sub_service[j].unit = result.rows[j].unit;
      console.log(newResult[0].sub_service[2]);
      console.log(newResult[0].sub_service.length);
      if (newResult[i].sub_service.length < countSubService[i]) {
        newResult[i].sub_service.push(...jsonObj.sub_service);
      }
    }
  }

  // console.log(setOrderNumber);
  // console.log(countSubService);

  return res.status(200).json({
    data: newResult,
    //data: result.rows,
  });
});

export default orderHistoryRouter;
