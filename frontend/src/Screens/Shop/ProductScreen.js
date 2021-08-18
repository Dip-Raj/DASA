import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useSelector, useDispatch } from "react-redux";
import ControlPointIcon from "@material-ui/icons/ControlPoint";

import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { getProductDetailsById } from "../../actions/productActions";
import {
  saveProductDetails,
  saveProductId,
  saveProductQuantity,
  saveProductSize,
} from "../../actions/ordersActions";
import CloseIcon from "@material-ui/icons/Close";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Header from "../../components/Header";
import {
  ChooseSizeScreen,
  ChooseQuantityScreen,
} from "../Customer/ChooseSizeScreen";

function ProductScreen({ match, history }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetailsById(match.params.id));
  }, [dispatch, match]);

  const productById = useSelector((state) => state.productById);
  const { theProduct } = productById;

  const [showProductDetails, setshowProductDetails] = useState(false);

  const changeShowProductDetails = () => {
    setshowProductDetails(!showProductDetails);
  };
  return (
    <div className="product__individual">
      <Header></Header>
      <div className="row product__individual__container container-fluid m-0 p-0">
        <div className="col-lg-6 col-md-6 product__individual__images p-0">
          <Carousel interval={null} indicators={true}>
            <Carousel.Item>
              <img
                className="d-block w-100 product__individual__carousel__image "
                src={theProduct.image1}
                alt="carousel"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 product__individual__carousel__image "
                src={theProduct.image2}
                alt="carousel"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 product__individual__carousel__image "
                src={theProduct.image3}
                alt="carousel"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 product__individual__carousel__image "
                src={theProduct.image4}
                alt="carousel"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 product__individual__carousel__image "
                src={theProduct.image5}
                alt="carousel"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 product__individual__carousel__image "
                src={theProduct.image6}
                alt="carousel"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 product__individual__carousel__image "
                src={theProduct.image7}
                alt="carousel"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-lg-6 col-md-6 productDetails text-left">
          {showProductDetails ? (
            <ProductDetailsPart2
              showingProductDetails={changeShowProductDetails}
              product={theProduct}
            ></ProductDetailsPart2>
          ) : (
            <ProductDetailsPart1
              showingProductDetails={changeShowProductDetails}
              product={theProduct}
              match={match}
              history={history}
            ></ProductDetailsPart1>
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

function ProductDetailsPart1({
  showingProductDetails,
  product,
  history,
  match,
}) {
  const dispatch = useDispatch();

  const [chooseSize, setChooseSize] = useState(false);
  const [chooseQuantity, setChooseQuantity] = useState(false);

  const changeSizeQuantity = () => {
    setChooseSize(false);
    setChooseQuantity(true);
  };

  const productById = useSelector((state) => state.productById);
  const { theProduct } = productById;
  const { idproduct, name, price } = theProduct;
  const saveProductIdHandler = () => {
    setChooseSize(true);
    dispatch(saveProductDetails({ idproduct, name, price }));
  };
  return (
    <div className="product__details__part1">
      {chooseSize ? (
        <ChooseSizeScreen
          changeValue={() => {
            changeSizeQuantity();
          }}
        ></ChooseSizeScreen>
      ) : (
        <>
          {chooseSize === false && chooseQuantity === true ? (
            <ChooseQuantityScreen></ChooseQuantityScreen>
          ) : (
            <>
              <div className="product__title__price">
                {product ? (
                  <p className="product__title">{product.name}</p>
                ) : null}

                {product ? (
                  <p className="product__price">Rs. {product.price}</p>
                ) : null}
              </div>
              <hr />
              <div className="product__color__style__design__container">
                <div className="product__color__style__design">
                  <span className="title">COLOR: </span>
                  {product ? <span>{product.color} </span> : null}
                </div>
                <div className="product__color__style__design">
                  <span className="title">STYLE: </span>
                  {product ? <span>{product.style} </span> : null}
                </div>
                <div className="product__color__style__design">
                  <span className="title">DESIGN: </span>
                  {product && product.lenght ? (
                    <span>{product.design} </span>
                  ) : null}
                </div>
              </div>
              <hr />
              <div className="product__detail__button">
                <span>
                  PRODUCT DETAILS{" "}
                  {/* <ControlPointIcon onClick={showingProductDetails}></ControlPointIcon>{" "} */}
                </span>
                {product ? (
                  <div className="product__details__part2__description">
                    {" "}
                    {product.description}{" "}
                  </div>
                ) : null}

                {product ? (
                  <div className="product__details__part2__specific__details">
                    {product.cloth_description}
                  </div>
                ) : null}
              </div>

              <hr />
              <div className="add__to__cart">
                <button
                  type="button"
                  name="button"
                  className="carousel-button"
                  onClick={saveProductIdHandler}
                >
                  NEXT
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

function ProductDetailsPart2({ showingProductDetails, product }) {
  return (
    <div className="product__details__part2">
      <div className="product__details__part2__title">
        <div>PRODUCT DETAILS</div>
        <div className="product__details__close__button">
          <CloseIcon onClick={showingProductDetails}></CloseIcon>
        </div>
      </div>

      {product ? (
        <div className="product__details__part2__description">
          {" "}
          {product.description}{" "}
        </div>
      ) : null}

      {product ? (
        <div className="product__details__part2__specific__details">
          {product.cloth_description}
        </div>
      ) : null}
    </div>
  );
}
export default ProductScreen;
