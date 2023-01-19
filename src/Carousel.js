import React, { useState } from "react";
import "./Carousel.css";
import profile_pic from "./profile_pic.svg";
import dark_left_arrow from "./dark_left_arrow.svg";
import dark_right_arrow from "./dark_right_arrow.svg";
import light_left_arrow from "./light_left_arrow.svg";
import light_right_arrow from "./light_right_arrow.svg";
import light_circle from "./light_circle.svg";
import dark_circle from "./dark_circle.svg";
import data from "./data.json";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(data.data);
  const length = carouselItems.length;

  const handlePrevious = () => {
    const newIndex = index - 1;
    const newIndexReq = newIndex < 0 ? length - 1 : newIndex;
    setIndex(newIndexReq);
    const carouselItemsCopy = carouselItems.map((item, indexReq) => {
      return indexReq === newIndexReq
        ? { ...item, is_active: 1 }
        : { ...item, is_active: 0 };
    });
    setCarouselItems(carouselItemsCopy);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    const newIndexReq = newIndex >= length ? 0 : newIndex;
    setIndex(newIndexReq);
    const carouselItemsCopy = carouselItems.map((item, indexReq) => {
      return indexReq === newIndexReq
        ? { ...item, is_active: 1 }
        : { ...item, is_active: 0 };
    });
    setCarouselItems(carouselItemsCopy);
  };

  const currentCarouselBasedOnIndex = (indexR) => {
    setIndex(indexR);
    const carouselItemsCopy = carouselItems.map((item, indexReq) => {
      return indexReq === indexR
        ? { ...item, is_active: 1 }
        : { ...item, is_active: 0 };
    });
    setCarouselItems(carouselItemsCopy);
  };

  return (
    <div className="carousel">
      {length &&
        carouselItems.map((item, indexReq) => (
          <section
            key={indexReq}
            className={`carousel-section ${
              item.is_active === 1 ? "" : "hide-class"
            }`}
            style={{ background: item.background_color, color: item.color }}
          >
            <h1 className="carousel-heading">What our customer are saying</h1>
            <div className="carousel-body">
              <div className="carousel-section1">
                <figure className="carousel-image-container">
                  <img
                    src={profile_pic}
                    alt="profile_pic"
                    className="carousel-image"
                  />
                </figure>
                <article className="carousel-user-details">
                  <h2>{item.user_name}</h2>
                  <p>{item.user_designation}</p>
                </article>
              </div>
              <div className="carousel-section2">
                <p className="carousel-para">{item.description}</p>
              </div>
            </div>
          </section>
        ))}
      <section className="carousel-button-section">
        <button
          className="carousel-btns"
          onClick={() => (index === 0 ? "" : handlePrevious())}
        >
          <img
            src={index === 0 ? light_left_arrow : dark_left_arrow}
            alt="left_arrow"
          />
        </button>
        {length &&
          carouselItems.map((item, indexReq) => (
            <button
              className="carousel-btns"
              key={indexReq}
              onClick={() => currentCarouselBasedOnIndex(indexReq)}
            >
              <img
                src={item.is_active ? dark_circle : light_circle}
                alt="circle"
              />
            </button>
          ))}
        <button
          className="carousel-btns"
          onClick={() => (index === length - 1 ? "" : handleNext())}
        >
          <img
            src={index === length - 1 ? light_right_arrow : dark_right_arrow}
            alt="dark_right_arrow"
          />
        </button>
      </section>
    </div>
  );
};

export default Carousel;
