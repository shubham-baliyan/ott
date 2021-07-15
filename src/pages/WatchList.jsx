import React from "react";
import CardSingle from "../components/Cards/CardSingle";

const WatchList = (props) => {
  const [movies, setMovies] = React.useState([]);
  React.useEffect(() => {
    let watchlist = window.localStorage.getItem("watchList");
    setMovies(JSON.parse(watchlist));
  }, []);
  console.log(movies);
  return (
    <div className="my-5 mx-2">
      <h1 className="my-2 text-center h2">My WatchList</h1>
      <div className=" d-flex flex-wrap container-fluid">
        {movies.length
          ? movies.map((item) => <CardSingle key={item.id} item={item} />)
          : null}
      </div>
    </div>
  );
};

export default WatchList;
