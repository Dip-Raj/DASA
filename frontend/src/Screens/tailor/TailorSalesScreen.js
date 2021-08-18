import React, { useEffect } from "react";
import "../../Styles/tailor/TailorSalesScreen.css";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { tailorSalesDetailsAction } from "../../actions/tailorActions";

function TailorSalesScreen({ history }) {
  const dispatch = useDispatch();
  const tailorLogin = useSelector((state) => state.tailorLogin);
  const { tailorInfo } = tailorLogin;
  useEffect(() => {
    if (tailorInfo) {
      const tailId = tailorInfo.tailor_id;
      console.log("screen id" + tailId);
      dispatch(tailorSalesDetailsAction(tailId));
    } else {
      history.push("/");
    }
  }, [dispatch, tailorInfo, history]);
  const tailorSalesDetails = useSelector((state) => state.tailorSalesDetails);
  const { loading, error, tailorSales } = tailorSalesDetails;
  const dashBoardCard1Contents = [
    {
      title: "Today Orders",
      amount: `${
        tailorSales
          ? tailorSales.todaysOrders === 0
            ? "no orders today"
            : tailorSales.todaysOrders
          : 0
      }`,
    },
    {
      title: "Today Revenue",
      amount: `${
        tailorSales
          ? tailorSales.todaysRevenue === null
            ? "no revenue today"
            : tailorSales.todaysRevenue
          : 0
      }`,
    },
    {
      title: "Today Customers",
      amount: "dipu you calculate",
    },
  ];
  const storeStatisticsData = [
    {
      title: "Orders",
      amount: `${
        tailorSales
          ? tailorSales.totalOrders === 0
            ? "0"
            : tailorSales.totalOrders
          : 0
      }`,
      icon: <LocalMallIcon style={{ color: "#854FFF" }}></LocalMallIcon>,
      containerColor: "#EFE8FF",
      iconColor: "#854FFF",
    },
    {
      title: "Revenue",
      amount: `${
        tailorSales
          ? tailorSales.totalRevenue === null
            ? "0"
            : tailorSales.totalRevenue
          : 0
      }`,
      icon: <AttachMoneyIcon style={{ color: "#09C2DE" }}></AttachMoneyIcon>,
      containerColor: "#DFF7FB",
    },
    {
      title: "Customers",
      amount: "dipu you calculate",
      icon: (
        <PeopleOutlineIcon style={{ color: "#FF63B6" }}></PeopleOutlineIcon>
      ),
      containerColor: "#FFEBF3",
    },
  ];

  return (
    <div className="tailor__sales">
      <div className="tailor__products__heading">
        <h5 className="tailor__tabs__title">DASHBOARD</h5>
      </div>
      <div className="row">
        {dashBoardCard1Contents.map((obj) => {
          return (
            <DashBoardCard1
              dashBoardTitle={obj.title}
              dashBoardAmount={obj.amount}
            ></DashBoardCard1>
          );
        })}
      </div>
      <div className="row">
        <DashBoardCard2
          title="Store Statistics"
          colLength="col-lg-6 col-12"
          dashBoardContent={
            <StoreStatistics
              storeStatisticsData={storeStatisticsData}
            ></StoreStatistics>
          }
        ></DashBoardCard2>
      </div>
    </div>
  );
}

function DashBoardCard1({ dashBoardTitle, dashBoardAmount, dashBoardStatus }) {
  return (
    <div className="dashBoard__card col-lg-6 col-12">
      <div className="dashBoard__card__container">
        <div className="dashBoardCard__title">{dashBoardTitle}</div>
        <div className="dashBoardCard__amount">{dashBoardAmount}</div>

        <div className="this__week__status">
          <div className="this__week__status__amount">{dashBoardStatus}</div>
        </div>
      </div>
    </div>
  );
}
function DashBoardCard2({ title, dashBoardContent, colLength }) {
  return (
    <div className={`dashBoard__card ${colLength}`}>
      <div className="dashBoard__card__container">
        <div className="dashBoardCard__title">{title}</div>
        <div className="dashBoardCard__content">{dashBoardContent}</div>
      </div>
    </div>
  );
}

function StoreStatistics({ storeStatisticsData }) {
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

export default withRouter(TailorSalesScreen);
