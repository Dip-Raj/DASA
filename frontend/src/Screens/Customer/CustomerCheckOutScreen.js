import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createOrder,
  savePaymentMethod,
  saveShippingAddress,
} from "../../actions/ordersActions";
import ImageWithTitle from "../../components/ImageWithTitle";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Message from "../../components/Message";
import "../../Styles/Customer/CustomerCheckOutScreen.css";
import Footer from "../Footer/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { Login } from "./CustomerSignInScreen";
function CustomerCheckOutScreen({ history }) {
  const [value, setValue] = useState(0);

  const changeValue = () => {
    setValue(value + 1);
  };

  const theLabelData = [
    { label: 1, text: "DETAILS" },
    { label: 2, text: "PAYMENT" },
    { label: 3, text: "PLACE ORDER" },
  ];

  const ourCheckOutTabs = [
    {
      theTab: <CCShipping value={changeValue}></CCShipping>,
    },
    {
      theTab: <CCPayment history={history} value={changeValue}></CCPayment>,
    },
    {
      theTab: <PlaceOrder history={history}></PlaceOrder>,
    },
  ];

  const processToOrder = useSelector((state) => state.processToOrder);
  const { productDetails, productSize, productQuantity } = processToOrder;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log("====================================");
  console.log(productDetails, productSize, productQuantity);
  console.log("====================================");
  useEffect(() => {
    if (!productDetails && !productSize && !productQuantity) {
      history.push("/shop");
    } else {
      setValue(0);
    }
  }, [history, userInfo, productDetails, productSize, productQuantity]);
  return (
    <>
      <Header></Header>
      <ImageWithTitle theTitle="CHECKOUT"></ImageWithTitle>
      <div className="customer__checkout">
        <div className="customer__checkout__tabs">
          {theLabelData.map((obj, index) => (
            <div className="the__label" key={index.toString}>
              <div
                className={`the__number__label ${
                  index <= value && "the__active__tab"
                } `}
                // onClick={() => {
                //   setValue(index);
                // }}
              >
                {obj.label}
              </div>
              <div className="the__text__label">{obj.text}</div>
            </div>
          ))}
        </div>
        <div className="checkout-tab-content">
          {ourCheckOutTabs[value].theTab}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default CustomerCheckOutScreen;

export function CCPersonalDetails({ history, value }) {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    if (firstName && lastName && phone) {
      // dispatch(saveShippingAddress({ city, street }));
      value();
    } else {
      setMessage("Please fill all the fields");
    }
  };

  return (
    <div className="cc__account__info ">
      <div className="cc__account__info__container ">
        <form action="">
          <div className="cc__account__info__inputs">
            <h3 className="checkOut__heading">CUSTOMER DETAILS</h3>

            <label htmlFor="">
              First Name
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
            </label>
            <label htmlFor="">
              First Name
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              ></input>
            </label>
            <label htmlFor="">
              Phone
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></input>
            </label>
          </div>
          {message && <Message variant="danger">{message}</Message>}

          <div className="checkout__next__button__container ">
            <button className="checkout__next__button" onClick={submitHandler}>
              CONTINUE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// shipping👇👇👇

export function CCShipping({ history, value }) {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [city, setCity] = useState("city");
  const [street, setStreet] = useState();
  const [message, setMessage] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    if (name && phone && street) {
      dispatch(saveShippingAddress({ name, phone, city, street }));
      value();
    } else {
      setMessage("Please fill all the fields");
    }
  };

  return (
    <div className="cc__account__info ">
      <div className="cc__account__info__container ">
        <form action="">
          <div className="cc__account__info__inputs">
            <h3 className="checkOut__heading">DETAILS</h3>
            <label htmlFor="">
              Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </label>
            <label htmlFor="">
              Phone
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></input>
            </label>
            <label htmlFor="">
              City
              <select name="city" id="city">
                <option value="Biratnagar">Biratnagar</option>
                <option value="Duhabi">Duhabi</option>
                <option value="Itahari">Itahari</option>
                <option value="Jhumka">Jhumka</option>
              </select>
            </label>
            <label htmlFor="">
              Street, Tole, Ward
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              ></input>
            </label>
          </div>
          {message && <Message variant="danger">{message}</Message>}

          <div className="checkout__next__button__container ">
            <button className="checkout__next__button" onClick={submitHandler}>
              CONTINUE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function CCPayment({ history, value }) {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod("cash on delivery"));
    value();
  };
  return (
    <div className="cc__payment">
      <div className="payment__method ">
        <h3 className="checkOut__heading"> PAYMENT METHOD</h3>
        <div className="the__payment_form">
          <div>
            <input
              className="paypal__input"
              type="radio"
              name="paymentMethod"
              value="cashOnDelivery"
              checked
            ></input>
            <label for="payment method" className="cash__on__delivery__title">
              Cash On Delivery
            </label>
          </div>

          <div className="checkout__next__button__container ">
            <button className="checkout__next__button" onClick={submitHandler}>
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PlaceOrder({ history }) {
  const dispatch = useDispatch();
  const [orderSuccess, setOrderSuccess] = useState(false);
  const processToOrder = useSelector((state) => state.processToOrder);
  const userLogin = useSelector((state) => state.userLogin);
  const {
    productDetails,
    productSize,
    productQuantity,
    shippingAddress,
    paymentMethod,
  } = processToOrder;
  const { idproduct, price } = productDetails;
  const { name, phone, city, street } = shippingAddress;
  const shippingPrice = 250;
  const orderCreate = useSelector((state) => state.orderCreate);
  const { order } = orderCreate;
  const id = order && order.idorder;
  console.log("====================================");
  console.log(id);
  console.log("====================================");

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        name,
        phone,
        city,
        tole: street,
        productId: idproduct,
        shippingPrice,
        length: productSize,
        quantity: productQuantity,
        totalPrice: price + shippingPrice,
      })
    );

    history.push(`/orderSuccess/8wr8wew0e`);
    // window.location.reload();
  };
  return (
    <div className="cc__place__order">
      <>
        <div className="product__checkout">
          {productDetails && productDetails.name}
        </div>
        <div className="product__checkout">
          {" "}
          {productDetails && productDetails.price}
        </div>
        <div className="checkout__choosed__field">
          <div className="checkout__choosed__field__title">DETAILS,</div>
          <div className="checkout__choosed__field__value">
            {shippingAddress &&
              shippingAddress.name + " " + shippingAddress.phone}
          </div>
          <div className="checkout__choosed__field__Icon">
            <CheckCircleIcon className="check__circle__icon"></CheckCircleIcon>
          </div>
        </div>
        <div className="checkout__choosed__field">
          <div className="checkout__choosed__field__title">SHIPPING,</div>
          <div className="checkout__choosed__field__value">
            {shippingAddress && shippingAddress.street}
          </div>
          <div className="checkout__choosed__field__Icon">
            <CheckCircleIcon className="check__circle__icon"></CheckCircleIcon>
          </div>
        </div>
        <div className="checkout__choosed__field">
          <div className="checkout__choosed__field__title">SIZE,</div>
          <div className="checkout__choosed__field__value">
            {productSize && productSize}
          </div>
          <div className="checkout__choosed__field__Icon">
            <CheckCircleIcon className="check__circle__icon"></CheckCircleIcon>
          </div>
        </div>

        <div className="checkout__choosed__field">
          <div className="checkout__choosed__field__title">QUANTITY,</div>
          <div className="checkout__choosed__field__value">
            {productQuantity && productQuantity}
          </div>
          <div className="checkout__choosed__field__Icon">
            <CheckCircleIcon className="check__circle__icon"></CheckCircleIcon>
          </div>
        </div>
        <div className="checkout__choosed__field">
          <div className="checkout__choosed__field__title">PAYMENT METHOD,</div>
          <div className="checkout__choosed__field__value">
            {paymentMethod && paymentMethod}
          </div>
          <div className="checkout__choosed__field__Icon">
            <CheckCircleIcon className="check__circle__icon"></CheckCircleIcon>
          </div>
        </div>
        <div className="checkout__choosed__field">
          <div className="checkout__choosed__field__title">TOTAL PRICE,</div>
          <div className="checkout__choosed__field__value">Rs. {12000}</div>
          <div className="checkout__choosed__field__Icon">
            <CheckCircleIcon className="check__circle__icon"></CheckCircleIcon>
          </div>
        </div>
        <button className="place__order__button" onClick={placeOrderHandler}>
          Place Order
        </button>
      </>
    </div>
  );
}
