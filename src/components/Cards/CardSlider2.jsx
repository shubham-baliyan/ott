import React from "react";
import Slider from "react-slick";
import { Slider6 as settings } from "../../service/script";
import CardSingle2 from "./CardSingle2";

const CardSlider2 = (props) => {
  return (
    <div className="my-5 mx-2">
      <h1 className="card__categoryHeading"> {props.title}</h1>
      <Slider {...settings} className="card__slider">
        {props.data.length
          ? props.data.map((item) => <CardSingle2 item={item} />)
          : null}
      </Slider>
    </div>
  );
};

export default CardSlider2;
