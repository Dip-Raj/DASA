import React, { useEffect } from "react";

import VisibilityIcon from "@material-ui/icons/Visibility";
import SeeMoreToogle from "../../components/SeeMoreContainer";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { adminAllProductsDetailAction } from "../../actions/adminActions";
function AdminProductsScreen({ history }) {
  const adminAllProducts = useSelector((state) => state.adminAllProducts);
  const { loading, adminAllProductsInfo } = adminAllProducts;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(adminAllProductsDetailAction());
  }, [dispatch]);

  return (
    <div className="products__admin">
      <div className="tailor__products__heading">
        <h5 className="admin__tabs__title">PRODUCTS </h5>
      </div>
      <div>
        <form action="">
          <label htmlFor="">select iamge</label>
          <input type="file" id="img" name="image" accept="image/*" />
          <input type="submit" />
        </form>
      </div>

      <div className="tailor__orders">
        <table class="table order__table" id="orders__table">
          <thead>
            <tr>
              <th scope="col" className="table__header">
                Title
              </th>
              <th scope="col" className="table__header">
                Date Added
              </th>

              <th scope="col" className="table__header">
                See more
              </th>
            </tr>
          </thead>
          <tbody>
            {adminAllProductsInfo &&
              adminAllProductsInfo.map((product) => (
                <tr>
                  <th scope="row" className="table__customer">
                    {product.name}
                  </th>
                  <td className="table__customer">{product.date_time}</td>

                  <td>
                    <SeeMoreToogle
                      theList={[
                        {
                          icon: <VisibilityIcon></VisibilityIcon>,
                          iconText: "See Product Details",
                          theClickFunction: () => {
                            // productPage(product.product_id);
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

export default withRouter(AdminProductsScreen);
