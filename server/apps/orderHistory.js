import {router} from "express";
import {pool} from "../utils/db.js"
import { protect } from "../middlewares/protects";

const orderHistoryRouter = router();

// API route to view order history by userId
orderHistoryRouter.get("/:id", async (req, res) => {
    const orderHistoryByUserId = req.params.id;

    const result = await pool.query(`select order_history.order_number, order_history.finished_date_time, order_history.status, serviceman_detail.serviceman_name, checkout.sub_service_id, sub_service.sub_service_name, checkout.total_price
    from order_history
    inner join checkout
    on order_history.checkout_id = checkout.checkout_id
    inner join serviceman_detail
    on serviceman_detail.serviceman_detail_id = order_history.serviceman_detail_id
	inner join users
	on users.user_id = order_history.user_id
	inner join sub_service
	on sub_service.sub_service_id = checkout.sub_service_id
	where users.user_id = $1`, [orderHistoryByUserId]
    );

    return res.status(200).json({
        data: result.rows,
    });
});

export default orderHistoryRouter;


