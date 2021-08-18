import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Message from "../../components/Message";
import "../../Styles/Customer/CustomerOrdresScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../../actions/ordersActions";

function CustomerOrdersScreen() {
  const [orderId, setOrderId] = useState();
  const [message, setMessage] = useState();
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderDetails);
  const { theOrder, loading, error } = orderDetails;
  const orderTrackHandler = () => {
    setMessage("");
    if (orderId) {
      dispatch(getOrderDetails(orderId));
    } else {
      setMessage("Please fill the order Id");
    }
  };
  return (
    <div className="your__orders__container">
      <img
        src="images/orderimage2.png"
        alt="flower"
        className="orderSuccessFlower"
      />
      <div className="track__order__container">
        <input
          type="text"
          value={orderId}
          placeholder="Enter your order id"
          onChange={(e) => setOrderId(e.target.value)}
        ></input>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        <button className="keep__exploring__button" onClick={orderTrackHandler}>
          TRACK ORDER
        </button>

        {theOrder && (
          <div>
            <div className="order__detail__row">
              <div className="order__detail__left">Order Id</div>
              <div className="order__detail__right">{theOrder.idorder}</div>
            </div>
            <div className="order__detail__row">
              <div className="order__detail__left">Customer Name</div>
              <div className="order__detail__right">{theOrder.name}</div>
            </div>
            <div className="order__detail__row">
              <div className="order__detail__left">Phone</div>
              <div className="order__detail__right">{theOrder.phone}</div>
            </div>
            <div className="order__detail__row">
              <div className="order__detail__left">Location</div>
              <div className="order__detail__right">
                {theOrder.city + " " + theOrder.tole}
              </div>
            </div>

            <div className="order__detail__row">
              <div className="order__detail__left">Total price</div>
              <div className="order__detail__right">{theOrder.total_price}</div>
            </div>
            <div className="order__detail__row">
              <div className="order__detail__left">Length</div>
              <div className="order__detail__right">{theOrder.length}</div>
            </div>
            <div className="order__detail__row">
              <div className="order__detail__left">Quantity</div>
              <div className="order__detail__right">{theOrder.quantity}</div>
            </div>
            <div className="order__detail__row">
              <div className="order__detail__left">Delivery Status</div>
              <div className="order__detail__right">
                {theOrder.is_delivered === "0" ? "Not delivered" : "Delivered"}
              </div>
            </div>
            <div className="order__detail__row">
              <div className="order__detail__left">Payment Status</div>
              <div className="order__detail__right">
                {theOrder.is_paid === "0" ? "Not Paid" : "Paid"}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomerOrdersScreen;
