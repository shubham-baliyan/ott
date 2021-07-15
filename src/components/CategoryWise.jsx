import React from "react";
import Slider from "react-slick";
import CardSingle from "./Cards/CardSingle";
import { Slider7 as settings } from "../service/script";
import { gql, useQuery } from "@apollo/client";
import Loading from "./Loading";

const GET_TOP_RATED = gql`
  query ($id: ID!) {
    genre(id: $id) {
      movies(limit: 20) {
        id
        title
        tagline
        overview
        runtime
        rating
        poster
      }
    }
  }
`;

const CategoryWise = ({ id, title }) => {
  const { data, error, loading } = useQuery(GET_TOP_RATED, {
    variables: { id },
  });
  console.log(data);

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  return (
    <div className="my-3 mx-2">
      <h1 className="card__categoryHeading"> {title}</h1>
      <Slider {...settings} className="card__slider">
        {data.genre.movies.length
          ? data.genre.movies.map((item) => (
              <CardSingle key={item.id} item={item} />
            ))
          : null}
      </Slider>
    </div>
  );
};

export default CategoryWise;
