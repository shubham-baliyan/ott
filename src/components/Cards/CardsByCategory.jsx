import React from "react";
import Slider from "react-slick";
import CardSingle from "./CardSingle";
import { Slider7 as settings } from "../../service/script";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIE_CATEGORY = gql`
  query {
    movies(where: { category: "Action" }) {
      id
      title
      tagline
      overview
      runtime
      rating
      poster
    }
  }
`;

const CardSlider = (props) => {
  const { data, error, loading } = useQuery(GET_MOVIE_CATEGORY, {
    variables: { id: props.id },
  });
  return (
    <div className="my-5 mx-2">
      <h1 className="card__categoryHeading"> {props.title}</h1>
      <Slider {...settings} className="card__slider">
        {data.movie.length
          ? data.movie.map((item) => <CardSingle item={item} />)
          : null}
      </Slider>
    </div>
  );
};

export default CardSlider;
