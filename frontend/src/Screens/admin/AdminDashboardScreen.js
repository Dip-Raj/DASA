import { Link } from "@material-ui/core";
import React, { useEffect } from "react";
import "../../Styles/admin/AdminDashboardScreen.css";

import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { useDispatch, useSelector } from "react-redux";

import PersonIcon from "@material-ui/icons/Person";
import { WorkOutlineOutlined, PersonPinOutlined } from "@material-ui/icons";
import SeeMoreToogle from "../../components/SeeMoreContainer.js";
import { withRouter } from "react-router";
import { adminDashBoardDetailsAction } from "../../actions/adminActions";
function AdminDashboardScreen({ history }) {
  const adminDashBoard = useSelector((state) => state.adminDashBoard);
  const { loading, adminDashBoardInfo } = adminDashBoard;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminDashBoardDetailsAction());
  }, [dispatch]);

  return (
    <div className="dashboard">
      <div className="tailor__products__heading">
        <h5 className="admin__tabs__title">DASHBOARD</h5>
      </div>

      {/* Store Statistics, order statistics, user by location👇 */}
      <div className="row">
        <AdminDashboardCard1
          title="Store Statistics"
          backgroundColor="white"
          titleColor="#526484"
          theWidth="col-lg-6 col-12"
          theContent={
            <StoreStatisticsAdmin
              dashBoardInfo={adminDashBoardInfo && adminDashBoardInfo}
            ></StoreStatisticsAdmin>
          }
          height="max-content"
        ></AdminDashboardCard1>
      </div>

      {/* Recent Order 👇 */}
    </div>
  );
}

function AdminDashboardCard1({
  title,
  backgroundColor,
  titleColor,
  theContent,
  height,
  theWidth,
}) {
  return (
    <div className={`admin__dashboard__card1 ${theWidth}`}>
      <div
        className="admin__dashbaord__card1__container"
        style={{ backgroundColor: `${backgroundColor}`, height: `${height}` }}
      >
        <div
          className="admin__dashbaord__card1__title"
          style={{ color: `${titleColor}` }}
        >
          {title}
        </div>
        <div className="admin__dashboard__card1__content">{theContent}</div>
      </div>
    </div>
  );
}

function StoreStatisticsAdmin({ dashBoardInfo }) {
  function StoreStatisticsElement({
    title,
    amount,
    icon,
    containerColor,
    iconColor,
  }) {
    return (
      <div className="store__statistics__element">
        <div className="store__statistics__data">
          <div className="theData__title">{title}</div>
          <div className="theData__amount">{amount}</div>
        </div>
        <div className="store__statistic__design">
          <div
            className="store__statistics__container"
            style={{ backgroundColor: `${containerColor}` }}
          >
            <div className="the__icon" style={{ fill: `${iconColor}` }}>
              {icon}
            </div>
          </div>
        </div>
      </div>
    );
  }
  const storeStatisticsData = [
    {
      title: "Orders",
      amount: dashBoardInfo && dashBoardInfo.totalOrders,
      icon: <LocalMallIcon style={{ color: "#854FFF" }}></LocalMallIcon>,
      containerColor: "#EFE8FF",
      iconColor: "#854FFF",
    },
    {
      title: "Revenue",
      amount: dashBoardInfo && dashBoardInfo.totalRevenue,
      icon: <AttachMoneyIcon style={{ color: "#09C2DE" }}></AttachMoneyIcon>,
      containerColor: "#DFF7FB",
    },
    {
      title: "Customers",
      amount: dashBoardInfo && dashBoardInfo.totalCustomers,
      icon: (
        <PeopleOutlineIcon style={{ color: "#FF63B6" }}></PeopleOutlineIcon>
      ),
      containerColor: "#FFEBF3",
    },
    {
      title: "Tailors",
      amount: dashBoardInfo && dashBoardInfo.totalTailors,
      icon: (
        <PersonPinOutlined style={{ color: "#9A6BFF" }}></PersonPinOutlined>
      ),
      containerColor: "#9a6bff35",
    },

    {
      title: "Products",
      amount: dashBoardInfo && dashBoardInfo.totalProducts,
      icon: <WebAssetIcon style={{ color: "#816BFF" }}></WebAssetIcon>,
      containerColor: "#EFECFF",
    },
  ];
  return (
    <div>
      {storeStatisticsData.map((obj) => {
        return (
          <StoreStatisticsElement
            title={obj.title}
            amount={obj.amount}
            icon={obj.icon}
            containerColor={obj.containerColor}
          ></StoreStatisticsElement>
        );
      })}
    </div>
  );
}

export default withRouter(AdminDashboardScreen);
