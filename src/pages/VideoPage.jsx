import { gql, useQuery } from "@apollo/client";
import React from "react";
import Video from "../components/Video";
import Error from "../components/Error";
import Loader from "../components/Loader";
const GET_SINLGE = gql`
  query ($id: ID!) {
    movie(id: $id) {
      id
      title
      poster
      genres {
        name
      }
      heroImg
      overview
      tagline
      runtime
    }
  }
`;
const VideoPage = (props) => {
  const { id } = props.match.params;
  const { data, error, loading } = useQuery(GET_SINLGE, {
    variables: { id },
  });
  if (error) return <Error />;
  if (loading) return <Loader />;
  return (
    <div>
      <Video poster={data.movie.heroImg} />
    </div>
  );
};

export default VideoPage;
