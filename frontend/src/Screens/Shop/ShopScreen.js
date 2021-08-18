import React, { useEffect } from "react";
import ImageWithTitle from "../../components/ImageWithTitle";
import "../../Styles/components/component.css";
import Product from "./Product";
// import products from "../../data/products";
import { useSelector, useDispatch } from "react-redux";
import { listAllProducts } from "../../actions/productActions";
import CustomerService from "./CustomerService";

function ShopScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listAllProducts());
  }, [dispatch]);
  const allProducts = useSelector((state) => state.allProducts);
  const { products } = allProducts;
  return (
    <div>
      {/* <ImageWithTitle theTitle="SELECT YOUR DESIGN"></ImageWithTitle> */}
      <div className="product__category__info">
        <div className="product__category__title">
          <h2>Achara </h2>
        </div>
        <div className="product__category__description">
          <span>Find variety of anchara design here</span>
        </div>
        <div className="shop__image">
          {/* <img className="shop__image" src="images/broder.jpg" alt="" /> */}
        </div>
      </div>
      <div>
        <div className="products__list row no-gutters h-100">
          {products.map((product) => (
            <Product key={product.idproduct} product={product}></Product>
          ))}
        </div>
      </div>
      <CustomerService></CustomerService>
    </div>
  );
}

export default ShopScreen;
