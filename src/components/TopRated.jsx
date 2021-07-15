import React from "react";
import Slider from "react-slick";
import CardSingle from "./Cards/CardSingle";
import { Slider7 as settings } from "../service/script";
import { gql, useQuery } from "@apollo/client";
import Loading from "./Loading";

const GET_TOP_RATED = gql`
  query {
    movies(where: { rating_gte: 8 }) {
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
  const { data, error, loading } = useQuery(GET_TOP_RATED, {
    
  });
  console.log(data);

  if (loading) return <Loading/>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="my-3 mx-2">
      <h1 className="card__categoryHeading"> {props.title}</h1>
      <Slider {...settings} className="card__slider">
        {data.movies.length
          ? data.movies.map((item) => <CardSingle key={item.id} item={item} />)
          : null}
      </Slider>
    </div>
  );
};

export default CardSlider;
