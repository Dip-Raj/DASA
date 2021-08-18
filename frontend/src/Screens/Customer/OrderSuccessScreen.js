import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { saveProductQuantity } from "../../actions/ordersActions";
import Header from "../../components/Header";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "../../Styles/Customer/orderSuccess.css";
function OrderSuccessThankYou({ match }) {
  return (
    <>
      <div className="order__success__container">
        {" "}
        <img
          src="images/bigflower.png"
          alt="flower"
          className="orderSuccessFlower"
        />
        <div className="thank__you__title__order">
          Order Successful
          <CheckCircleIcon className="check__circle__icon orderSuccessIcon"></CheckCircleIcon>
        </div>
        <div className="thank__you__description">
          Thanks for your wonderful order. We will contact you real quick .
        </div>
        <Link to="/shop">
          <button className="keep__exploring__button">KEEP EXPLORING</button>
        </Link>
      </div>
    </>
  );
}

export default OrderSuccessThankYou;
