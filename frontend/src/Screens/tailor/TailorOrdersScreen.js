import React, { useEffect } from "react";
import "../../Styles/tailor/TailorOrdersScreen.css";
import SearchIcon from "@material-ui/icons/Search";
import VisibilityIcon from "@material-ui/icons/Visibility";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import { useDispatch, useSelector } from "react-redux";

import PersonIcon from "@material-ui/icons/Person";
import { withRouter } from "react-router";
import SeeMoreToogle from "../../components/SeeMoreContainer";
import { tailorOrdersAction } from "../../actions/tailorActions";
function TailorOrdersScreen({ history }) {
  const tableStatus = (
    <div className="table__status__container">
      <div class="table__status__icon"></div>
      <div className="table__status__text">Delivered</div>
    </div>
  );
  const tableStatusNotDeliverd = (
    <div className="table__status__notDelivered__container">
      <div class="table__status__icon"></div>
      <div className="table__status__text">Not Delivered</div>
    </div>
  );

  const dispatch = useDispatch();
  const tailorLogin = useSelector((state) => state.tailorLogin);
  const { tailorInfo } = tailorLogin;
  const tailorOrders = useSelector((state) => state.tailorOrders);
  useEffect(() => {
    if (tailorInfo) {
      const tailId = tailorInfo.tailor_id;
      dispatch(tailorOrdersAction(tailId));
    } else {
      history.push("/tailorSignin");
    }
  }, [dispatch, tailorInfo, history]);
  // const tableRow = (
  const { loading, error, orders } = tailorOrders;
  // orders = tai
  const theOrders = tailorOrders && tailorOrders.orders;

  // );
  return (
    <div className="tailor__order">
      <div className="tailor__heading row no-gutters">
        <div className="tailor__heading__part1 col-lg-6 col-md-6 col-12">
          {" "}
          <h5 className="tailor__tabs__title">PRODUCT ORDERS</h5>
        </div>
        <div className="tailor__heading__part2 col-lg-4 col-md-5 col-12 justify-content-end"></div>
      </div>
      <div className="tailor__orders">
        <table class="table order__table" id="orders__table">
          <thead>
            <tr>
              <th scope="col" className="table__header">
                Order No.
              </th>
              <th scope="col" className="table__header">
                Date
              </th>
              <th scope="col" className="table__header">
                Status
              </th>
              <th scope="col" className="table__header">
                Customer
              </th>

              <th scope="col" className="table__header">
                Total
              </th>
              <th scope="col" className="table__header">
                See more
              </th>
            </tr>
          </thead>
          <tbody>
            {theOrders &&
              theOrders.map((order) => (
                <tr>
                  <th scope="row" className="table__order__number">
                    {order.idorder}
                  </th>
                  <td className="table__date">{order.date_time}</td>
                  <td>
                    <div className="table__status">
                      {" "}
                      {order.status === "delivered"
                        ? tableStatus
                        : tableStatusNotDeliverd}
                    </div>
                  </td>
                  <td className="table__customer">{order.first_name}</td>
                  <td className="table__price">
                    {" "}
                    <span className="table__rs__title">Rs.</span>
                    {order.total_price}
                  </td>{" "}
                  <td>
                    <SeeMoreToogle
                      theList={[
                        {
                          icon: <VisibilityIcon></VisibilityIcon>,
                          iconText: "Order Details",
                          theClickFunction: () => {
                            // orderDetailsPage(order.order_id);
                          },
                        },

                        {
                          icon: <PersonIcon></PersonIcon>,
                          iconText: "Customer Details",
                          theClickFunction: () => {
                            // customerDetailsPage(order.customer_id);
                          },
                        },
                      ]}
                    ></SeeMoreToogle>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default withRouter(TailorOrdersScreen);
