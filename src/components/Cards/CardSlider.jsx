import React from "react";
import Slider from "react-slick";
import CardSingle from "./CardSingle";
import { Slider7 as settings } from "../../service/script";

const CardSlider = (props) => {
  return (
    <div className="my-5 mx-2">
      <h1 className="card__categoryHeading"> {props.title}</h1>
      <Slider {...settings} className="card__slider">
        {props.data.length?props.data.map(item=>(
          <CardSingle key={item.id} item={item}/>
        )):null}
       
      </Slider>
    </div>
  );
};

export default CardSlider;
