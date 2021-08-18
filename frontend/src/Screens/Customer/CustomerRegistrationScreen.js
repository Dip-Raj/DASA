import React, { useEffect, useState } from "react";
import ImageWithTitle from "../../components/ImageWithTitle";
import { Checkbox } from "@material-ui/core";
import "../../Styles/Customer/CustomerRegistration.css";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { customerRegister } from "../../actions/customerActions";
import Message from "../../components/Message";
import Loader from "../../components/Loader";

export const CustomerRegistrationScreen = ({ location, history }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const [confirmPassword, setConfirmPassword] = useState();
  const redirect = location.search ? location.search.split("=")[1] : "/account";
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  const dispatch = useDispatch();

  console.log("====================================");
  console.log(redirect);
  console.log("====================================");

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, redirect, userInfo]);

  const registerHandler = (e) => {
    e.preventDefault();
    if (firstName && lastName && email && phone && password) {
      if (password !== confirmPassword) {
        setMessage("Password do not match");
      } else {
        dispatch(customerRegister(firstName, lastName, email, phone, password));
      }
    } else {
      setMessage("Please fill all the fields");
    }
  };
  return (
    <div>
      <div className="authentication">
        <ImageWithTitle theTitle="CREATE DASA ACCOUNT"></ImageWithTitle>
        <div className=" login__signup row container-fluid p-0 m-0  ">
          <div className="signup col-lg-6 col-md-6 p-0">
            <div className="signup__container">
              <div className="title__subtitle">
                <h4>REGISTER</h4>

                <p className="subtitle">
                  Please register below to create an account
                </p>
              </div>
              <form action="">
                <div className="register__inputs">
                  <label>
                    First Name
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    ></input>
                  </label>

                  <label>
                    Last Name
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    ></input>
                  </label>

                  <label>
                    Email
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </label>
                  <label>
                    Phone
                    <input
                      type="number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
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
                  <label htmlFor="">
                    Confirm Password
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                  </label>
                </div>
                <div className="signup__form__footer ">
                  <div className="security__text">
                    <Checkbox></Checkbox>
                    <small>
                      Subscribe to receive email updates about Daasaa
                      productsemail updates about Daasaa products, services and
                      events.{" "}
                    </small>
                  </div>
                  {message && <Message variant="danger">{message}</Message>}

                  {error && <Message variant="danger">{error}</Message>}
                  {loading && <Loader></Loader>}
                  <div className="row justify-content-between  no-gutters">
                    <button
                      className="register__button  "
                      onClick={registerHandler}
                    >
                      CONTINUE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
