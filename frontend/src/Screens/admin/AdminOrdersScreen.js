import React, { useEffect } from "react";

import VisibilityIcon from "@material-ui/icons/Visibility";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import PersonIcon from "@material-ui/icons/Person";
import SeeMoreToogle from "../../components/SeeMoreContainer";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { adminAllProductOrdersDetailAction } from "../../actions/adminActions";

function AdminOrdersScreen({ history }) {
  const adminAllProductOrders = useSelector(
    (state) => state.adminAllProductOrders
  );
  const { loading, adminAllProductOrdersInfo } = adminAllProductOrders;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(adminAllProductOrdersDetailAction());
  }, [dispatch]);

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
  let seeMoreOptionsList = [
    {
      icon: <VisibilityIcon></VisibilityIcon>,
      iconText: "Order Details",
      theLink: "/orderDetails",
    },
    {
      icon: <AssignmentIndIcon></AssignmentIndIcon>,
      iconText: "Tailor Details",
      theLink: "/tailorAccount",
    },
    {
      icon: <AssignmentIndIcon></AssignmentIndIcon>,
      iconText: "Employee Details",
      theLink: "/employeeDetails",
    },
    {
      icon: <PersonIcon></PersonIcon>,
      iconText: "Customer Details",
      theLink: "/customerDetails",
    },
  ];
  const seeMoreFunction = () => {
    return <SeeMoreToogle theList={seeMoreOptionsList}></SeeMoreToogle>;
  };

  return (
    <div className="orders__admin">
      <div className="tailor__products__heading">
        <h5 className="admin__tabs__title">ORDERS</h5>
      </div>
      <div className="tailor__orders">
        <table class="table admin__orders__table" id="">
          <thead>
            <tr>
              <th scope="col" className="table__header">
                Order Id
              </th>
              <th scope="col" className="table__header">
                Ordered Date
              </th>
              <th scope="col" className="table__header">
                Status
              </th>

              <th scope="col" className="table__header">
                See more
              </th>
            </tr>
          </thead>
          <tbody>
            {adminAllProductOrdersInfo &&
              adminAllProductOrdersInfo.map((productOrder) => (
                <tr>
                  <th scope="row" className="table__customer">
                    {productOrder.idorder}
                  </th>
                  <td className="table__customer">{productOrder.date_time}</td>

                  <td>
                    <div className="table__status">
                      {" "}
                      {productOrder.status === "delivered"
                        ? tableStatus
                        : tableStatusNotDeliverd}
                    </div>
                  </td>

                  <td>
                    <SeeMoreToogle
                      theList={[
                        {
                          icon: <VisibilityIcon></VisibilityIcon>,
                          iconText: "Order Details",
                          theClickFunction: () => {
                            // orderDetailsPage(productOrder.order_id);
                          },
                        },
                        {
                          icon: <AssignmentIndIcon></AssignmentIndIcon>,
                          iconText: "Tailor Details",
                          theLink: "/tailorAccount",
                        },

                        {
                          icon: <PersonIcon></PersonIcon>,
                          iconText: "Customer Details",
                          theClickFunction: () => {
                            // customerDetailsPage(productOrder.customer_id);
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

export default withRouter(AdminOrdersScreen);
