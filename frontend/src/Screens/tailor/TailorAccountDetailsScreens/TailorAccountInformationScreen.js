import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTailorProfile } from "../../../actions/tailorActions";
import "../../../Styles/tailor/TailorAccountDetailsScreens.css";

function TailorAccountInformationScreen({ editPage, changePasswordPage }) {
  const dispatch = useDispatch();
  const tailorLogin = useSelector((state) => state.tailorLogin);
  const { tailorInfo } = tailorLogin;
  return (
    <div className="tailor__account__information">
      <div className="tailor__account__information">
        Please update your personal account details, update your address book or
        change your email setting here.
      </div>
      <div className="tailor__account__information__container">
        <div className="tailor__details">
          <span>
            {" "}
            <strong>First Name:</strong>{" "}
          </span>
          <span>{tailorInfo && tailorInfo.first_name}</span>
        </div>
        <div className="tailor__details">
          <span>
            {" "}
            <strong>Last Name:</strong>{" "}
          </span>
          <span>{tailorInfo && tailorInfo.last_name}</span>
        </div>

        <div className="tailor__details">
          <span>
            {" "}
            <strong>Phone:</strong>{" "}
          </span>
          <span>{tailorInfo && tailorInfo.phone}</span>
        </div>
        <div className="tailor__details">
          <span>
            {" "}
            <strong>Email:</strong>{" "}
          </span>
          <span>{tailorInfo && tailorInfo.email}</span>
        </div>
      </div>
      <div className="tailor__account__information__buttons row ">
        <div className="tailor__edit__button__container col-6">
          <button className="tailor__edit__button" onClick={editPage}>
            EDIT
          </button>
        </div>
        <div className="tailor__changepassword__button__container col-6">
          <button
            className="tailor__changepassword__button"
            onClick={changePasswordPage}
          >
            CHANGE PASSWORD
          </button>
        </div>
      </div>
    </div>
  );
}

export function TailorAccountInformationEdit({ editPage }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const dispatch = useDispatch();
  const tailorLogin = useSelector((state) => state.tailorLogin);
  const { tailorInfo } = tailorLogin;
  useEffect(() => {
    if (tailorInfo) {
      setFirstName(tailorInfo.first_name);
      setLastName(tailorInfo.last_name);
      setEmail(tailorInfo.email);
      setPhone(tailorInfo.phone);
    }
  }, [tailorInfo, dispatch]);

  const updateProfileHandler = (e) => {
    console.log("I ran");
    e.preventDefault();
    // dispatch update profile
    console.log("====================================");
    console.log(firstName, lastName, email, phone);
    console.log("====================================");
    const tailor_id = tailorInfo.tailor_id;
    dispatch(
      updateTailorProfile({ tailor_id, firstName, lastName, email, phone })
    );
    editPage();
    // dispatch(getTailorDetails("profile"));
  };
  return (
    <div className="tailor__account__information__edit">
      <div className="tailor__account__information__edit__instruction">
        Please update your personal account details, update your address book or
        change your email setting here.
      </div>

      <form action="">
        <div className="tailor__address__edit__inputs">
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
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </label>
          <label>
            Phone
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
          </label>
        </div>
        <div className="tailor__account__information__buttons row justify-content-between">
          <div className="tailor__save__button__container col-6">
            <button
              className="tailor__save__button"
              onClick={updateProfileHandler}
            >
              SAVE
            </button>
          </div>
          <div className="tailor__accountCancel__button__container col-6">
            <button
              className="tailor__accountCancel__button"
              onClick={editPage}
            >
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export function TailorAccountInformationChangePassword({ changePasswordPage }) {
  const dispatch = useDispatch();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [message, setMessage] = useState();

  return (
    <div className="tailor__account__information__change__password">
      <div className="tailor__account__information__change__password__instruction">
        Please update your personal account details, update your address book or
        change your email setting here.
      </div>
      <div className="tailor__account__information__change__password__title">
        <h4>CHANGE PASSWORD</h4>
      </div>
      <form action="">
        <div className="tailor__account__information__change__password__inputs">
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>
          <label>
            Confirm Password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
          </label>
        </div>
        <div className="tailor__account__information__buttons row justify-content-between">
          <div className="tailor__change__password__edit__button__container col-6">
            <button
              className="tailor__change__password__save__button"
              // onClick={updatePasswordHandler}
            >
              SAVE
            </button>
          </div>
          <div className="tailor__change__password__button__container col-6">
            <button
              className="tailor__cancel__button"
              onClick={changePasswordPage}
            >
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TailorAccountInformationScreen;
