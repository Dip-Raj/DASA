import React from "react";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
const CustomerService = () => {
  return (
    <div>
      {/* 5th section, customer service */}
      <div className="customer__service__container row no-gutters">
        <div className="customer__service  col-lg-4 col-md-4 col-sm-4 col-sm-12   ">
          <img src="images/redflowersmall.png" alt="" />
          <p className="customer__service__description">High Quality Boutta</p>
        </div>
        <div className="customer__service col-lg-4 col-md-4 col-sm-4 col-sm-12   ">
          <img src="images/smallflower2.png" alt="" />

          <p className="customer__service__description">Precise Shape</p>
        </div>
        <div className="customer__service col-lg-4 col-md-4 col-sm-4 col-sm-12   ">
          <img src="images/1.png" alt="" />

          <p className="customer__service__description">Happy Customer</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
