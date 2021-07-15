import React from "react";
import CardSingle from "../components/Cards/CardSingle";
import InfiniteScroll from "react-infinite-scroll-component";
import { gql, useQuery } from "@apollo/client";
import Loading from "../components/Loading";

const GET_TOP_RATED = gql`
  query ($id: ID!, $start: Int) {
    moviesConnection(where: { genres: $id }) {
      aggregate {
        count
      }
    }
    genre(id: $id) {
      name
      movies(limit: 20, start: $start) {
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

const CategoryPage = (props) => {
  const [start, setStart] = React.useState(0);

  const [hasMore, setHasMore] = React.useState(true);
  const [movies, setMovies] = React.useState([]);
  const { id } = props.match.params || "60c052d1c863d03bd0afae9a";
  const { data, error } = useQuery(GET_TOP_RATED, {
    variables: { id, start },
    onCompleted: (data) => setMovies([...movies, ...data.genre.movies]),
  });
  console.log(movies, data);
  const fetchMoreData = () => {
    if (movies.length >= data.moviesConnection.aggregate.count) {
      setHasMore(false);
      console.log("hi");
      return;
    }
    setStart(start + 20);
  };

  if (!movies.length) return <Loading />;
  if (error) return <p>Error :(</p>;

  return (
    <div className="my-5 mx-2">
      <h1 className="my-2 text-center h2"> {data?.genre.name}</h1>
      <div className=" d-flex flex-wrap container-fluid">
        {movies.length ? (
          <InfiniteScroll
            dataLength={movies.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<Loading />}
            endMessage={
              <p style={{ textAlign: "center" }} className="h4">
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <div className=" d-flex flex-wrap container-fluid">
              {movies.map((item) => (
                <CardSingle key={item.id} item={item} />
              ))}
            </div>
          </InfiniteScroll>
        ) : null}
      </div>
    </div>
  );
};

export default CategoryPage;
