import React from "react";
import "../../Styles/shop/product.css";
import { Link } from "react-router-dom";
function Product({ product }) {
  return (
    <div className="product__container col-lg-3 col-md-4   ">
      <Link
        to={`/product/${product.idproduct}`}
        style={{ textDecoration: "none", color: "none" }}
      >
        <div className="product">
          <img
            className="specific__product__image"
            src={product.image1}
            // src={"images/wholeimage.png"}
            alt="product"
          />
          <div className="product__info ">
            <div className="product__name">{product.name}</div>
            <div className="product__price">Rs. {product.price}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
