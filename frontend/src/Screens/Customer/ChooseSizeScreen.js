import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  saveProductQuantity,
  saveProductSize,
} from "../../actions/ordersActions";
import Header from "../../components/Header";
import "../../Styles/Customer/ChooseSize.css";
function ChooseSizeScreen({ changeValue, location, history, match }) {
  const [size, setSize] = useState();
  const [theSizeValue, setTheSizeValue] = useState();
  let sizeOptions = [
    { id: 1, sizeName: "2.5 m" },
    { id: 2, sizeName: "3.0 m" },
    { id: 3, sizeName: "3.5 m" },
    { id: 4, sizeName: "4 m" },
    { id: 5, sizeName: "4.5 m" },
    { id: 6, sizeName: "5 m" },
  ];

  const SizeOptionButton = ({ sizeName, index, id }) => {
    return (
      <div>
        <button
          className={`options__buttons ${index + 1 === size && `active___btn`}`}
          onClick={() => {
            setSize(id);
            setTheSizeValue(sizeName);
          }}
        >
          <span className="size__options__text">{sizeName}</span>
        </button>
      </div>
    );
  };
  let sizeOptionsButtons = sizeOptions.map((obj, index) => {
    return (
      <SizeOptionButton
        key={obj.toString()}
        sizeName={obj.sizeName}
        id={obj.id}
        index={index}
      ></SizeOptionButton>
    );
  });
  const dispatch = useDispatch();

  const onClickHandler = () => {
    if (theSizeValue) {
      changeValue();
      dispatch(saveProductSize(theSizeValue));
    }
  };
  return (
    <div className="choose__size__screen">
      <div className="choose__size__container">
        <div className="choose__title">CHOOSE SIZE</div>
        <div className="size__options">
          {sizeOptionsButtons}
          <div>
            <Link>
              <button className="option__next__button" onClick={onClickHandler}>
                NEXT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChooseQuantityScreen({ history }) {
  const [quantity, setQuantity] = useState();
  const [theQuantityValue, settheQuantityValue] = useState();
  let quantityOptions = [
    { thequantity: 1 },
    { thequantity: 2 },
    { thequantity: 3 },
  ];
  const QuantityOptionButton = ({ thequantity, index }) => {
    return (
      <div>
        <button
          className={`options__buttons ${
            index + 1 === quantity && `active___btn`
          }`}
          onClick={() => {
            setQuantity(thequantity);
            settheQuantityValue(thequantity);
          }}
        >
          <span>{thequantity}</span>
        </button>
      </div>
    );
  };
  let quantityOptionsButtons = quantityOptions.map((obj, index) => {
    return (
      <QuantityOptionButton
        key={obj.toString()}
        thequantity={obj.thequantity}
        index={index}
      ></QuantityOptionButton>
    );
  });
  const dispatch = useDispatch();
  const onClickHandler = () => {
    if (theQuantityValue) {
      dispatch(saveProductQuantity(theQuantityValue));
    }
  };
  return (
    <div className="choose__size__screen">
      <div className="choose__size__container">
        <div className="choose__title">CHOOSE QUANTITY</div>
        <div className="size__options">
          {quantityOptionsButtons}
          <div>
            <Link to="/checkout">
              <button className="option__next__button" onClick={onClickHandler}>
                NEXT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export { ChooseSizeScreen, ChooseQuantityScreen };
