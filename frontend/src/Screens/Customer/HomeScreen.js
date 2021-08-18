import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "../../Styles/Customer/HomeScreen.css";

function HomeScreen() {
  return (
    <div className="home">
      {/* 1st section) First Carousel */}
      <div className=" ">
        <Carousel>
          <Carousel.Item>
            <picture>
              <source
                media="(min-width: 680px)"
                srcset="images/mainimage.jpg"
              />
              <img
                className="d-block w-100 carousel__image "
                // src="images\"
                src="images\wholeimage.png"
                // src="images\2flowers.jpg"
                // src="images\2flowerspng.jpg"
                alt="First slide"
              />
            </picture>

            <Carousel.Caption>
              <Link to="/shop">
                <button type="button" name="button" className="carousel-button">
                  SHOP ANCHARA
                </button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item>
            <img
              className="d-block w-100 carousel__image "
              src="images\group.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <Link to="/shop">
                <button type="button" name="button" className="carousel-button">
                  SHOP ANCHARA
                </button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel__image "
              src="images\back.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <Link to="/shop">
                <button type="button" name="button" className="carousel-button">
                  SHOP ANCHARA
                </button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel__image "
              src="images\kids.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <Link to="/shop">
                <button type="button" name="button" className="carousel-button">
                  SHOP ANCHARA
                </button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel__image "
              src="images\group.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <Link to="/shop">
                <button type="button" name="button" className="carousel-button">
                  SHOP ANCHARA
                </button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
      </div>
    </div>
  );
}

export default HomeScreen;
