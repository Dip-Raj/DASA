import React, { useEffect } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import SeeMoreToogle from "../../components/SeeMoreContainer";
import "../../Styles/admin/AdminTailorsScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { adminAllTailorsDetailAction } from "../../actions/adminActions";

function AdminTailorsScreen({ history }) {
  const adminAllTailors = useSelector((state) => state.adminAllTailors);
  const { loading, adminAllTailorsInfo } = adminAllTailors;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminAllTailorsDetailAction());
  }, [dispatch]);

  return (
    <div className="tailor__admin">
      <div className="tailor__products__heading">
        <h5 className="admin__tabs__title">TAILORS</h5>
      </div>
      <div className="tailor__orders">
        <table class="table order__table" id="orders__table">
          <thead>
            <tr>
              <th scope="col" className="table__header">
                Name
              </th>
              <th scope="col" className="table__header">
                Date Joined
              </th>

              <th scope="col" className="table__header">
                See more
              </th>
            </tr>
          </thead>
          <tbody>
            {adminAllTailorsInfo &&
              adminAllTailorsInfo.map((tailor) => (
                <tr>
                  <th scope="row" className="table__customer">
                    {tailor.first_name}
                  </th>
                  <td className="table__customer">{tailor.date_time}</td>

                  <td>
                    <SeeMoreToogle
                      theList={[
                        {
                          icon: <VisibilityIcon></VisibilityIcon>,
                          iconText: "See Tailor Details",
                          theClickFunction: () => {},
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

export default withRouter(AdminTailorsScreen);
