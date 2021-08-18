import React, { useState } from "react";
import "../../Styles/Customer/CustomerRegistration.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ImageWithTitle from "../../components/ImageWithTitle";
import { customerLogin } from "../../actions/customerActions";
import Message from "../../components/Message";
import Loader from "../../components/Loader";

function CustomerSignInScreen({ location, history }) {
  return (
    <>
      <div className="authentication">
        <ImageWithTitle theTitle="SIGN IN TO YOUR DASA ACCOUNT"></ImageWithTitle>
        <div className=" login__signup row container-fluid p-0 m-0  ">
          <Login location={location} history={history}></Login>
        </div>
      </div>
    </>
  );
}

export function Login({ location, history, value, simpleSignIn }) {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState();

  // const redirect = location.search ? location.search.split("=")[1] : "/cart";
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      // history.push(redirect);
    }
  }, [history, userInfo]);
  const dispatch = useDispatch();
  const loginHandler = (e) => {
    e.preventDefault();
    if (email && password) {
      if (simpleSignIn === false) {
        value();
      }
      dispatch(customerLogin(email, password));
      setMessage("");
    } else {
      setMessage("Please fill all the fields");
    }
  };
  return (
    <div className="login col-lg-6 col-md-6 p-0">
      <div className="login__container">
        <div className="title__subTitle">
          <h4>SIGN IN</h4>

          <p className="subtitle">
            Please enter your email and password to access your account
          </p>
        </div>
        <form action="">
          <div className="signin__inputs">
            <label htmlFor="">
              email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </label>
            <label htmlFor="">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </label>
          </div>
          <div className="security__text">
            <small>
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms Of Service Apply{" "}
            </small>
          </div>
          {message && <Message variant="danger">{message}</Message>}

          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader></Loader>}
          <div className="login__form__footer row justify-content-between mr-0 ml-0">
            <p>
              <u> New Customer?</u>
              <Link to="/register"> Register</Link>
            </p>
            {/* <Link to="/cart"> */}
            <button className="signIn__button" onClick={loginHandler}>
              Sign In
            </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(CustomerSignInScreen);
