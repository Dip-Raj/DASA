import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../../Styles/Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="">
      {/* <img src="images/border.png" alt="" className="footer__image" /> */}
      <div
        className="footer__image"
        style={{
          backgroundImage: `url("/images/border.png")`,
        }}
      >
        .
      </div>
      <div className="website__footer  no-gutters">
        <div className=" secondSectionFooter">
          <div className="row no-gutters">
            {/* lets grow together section 👇*/}
            <div className="col-lg-3 col-md-3 col-12 footer__links__container">
              <div className="followUsTitle">START SELLING ACHARA WITH US</div>
              {/* <p className=" " style={{ color: "white" }}>
                Start Selling Anchara
              </p> */}
              <button className="get__started__tailor">
                call +9779804355969
              </button>
              {/* <Link to="/employeeSignIn">
                <p className="footer__link">Be Employee</p>
              </Link> */}
            </div>

            {/* Need help section 👇 */}
            <div className="col-lg-3 col-md-3 col-6 footer__links__container">
              <div className="followUsTitle">NEED HELP</div>
              {/* <Link to="/contactUs" style={{ textDecoration: "none" }}>
                <p className="footer__link ">Contact Us</p>
              </Link> */}
              <Link to="/faqs" style={{ textDecoration: "none" }}>
                <p className="footer__link">Shipping Service</p>
              </Link>
              <Link to="/faqs" style={{ textDecoration: "none" }}>
                <p className="footer__link ">Payment Options</p>
              </Link>
              <Link to="/faqs" style={{ textDecoration: "none" }}>
                <p className="footer__link">FAQs</p>
              </Link>
            </div>

            {/* The Company Section👇 */}
            <div className="col-lg-3 col-md-3 col-6 footer__links__container">
              <div className="followUsTitle">THE COMPANY</div>
              <Link to="/aboutus" style={{ textDecoration: "none" }}>
                <p className="footer__link">About DASA</p>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <p className="footer__link">Legal</p>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <p className="footer__link">Privacy Policy</p>
              </Link>
              {/* <p className="footer__link">Legal</p>
              <p className="footer__link">Privacy Policy</p> */}
            </div>

            {/* Find us on seciton 👇 */}
            <div className="col-lg-3 col-md-3 col-12 footer__links__container middle__links__container">
              <div className="followUsTitle">FIND US ON</div>
              <div className="socialMediaIcons">
                <FacebookIcon className="socialIcon"></FacebookIcon>
                <YouTubeIcon className="socialIcon"></YouTubeIcon>
                <InstagramIcon className="socialIcon"></InstagramIcon>
                {/* <TwitterIcon className="socialIcon"></TwitterIcon> */}
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-3 col-md-3 col-12 footer__links__container middle__links__container">
              <div className="followUsTitle">FIND YOUR ORDER STATUS</div>

              <Link to="/trackOrder" style={{ textDecoration: "none" }}>
                <button className="track__order__button">
                  TRACK YOUR ORDER{" "}
                </button>
              </Link>
            </div>
            <div className="col-lg-3 col-md-3 col-12 footer__links__container middle__links__container">
              <div className="followUsTitle">CONTACT US AT</div>

              <Link style={{ textDecoration: "none" }}>
                <p className="footer__link">+9779804355969</p>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <p className="footer__link">achara@gmail.com</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
