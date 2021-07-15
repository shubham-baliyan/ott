import { useQuery, gql } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Error from "../components/Error";
import Loader from "../components/Loader";
import TopRated from "../components/TopRated";

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
function Single(props) {
  const { id } = props.match.params;
  const { data, error, loading } = useQuery(GET_SINLGE, {
    variables: { id },
  });
  console.log(data);
  const addToLocal = () => {
    let items = JSON.parse(localStorage.getItem("watchList"));
    let obj = items.find((i) => i.id === data.movie.id);
    if (!obj) items.push(data.movie);
    localStorage.setItem("watchList", JSON.stringify(items));
  };
  if (loading) return <Loader />;
  if (error) return <Error />;
  function timeConvert(n) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + " hr " + rminutes + " min";
  }
  return (
    <div>
      <Container className="my-5">
        {data && data.movie ? (
          <div className="__container">
            <div className="img">
              <img src={data.movie?.heroImg} alt="poster" />
              <div className="__details">
                <h4>{data.movie.title}</h4>
                <h5>{timeConvert(data.movie.runtime)} ● 2021 ● English </h5>
                <h5>
                  {data.movie.genres.map((item) => " " + item.name + " ")}
                </h5>
                <p>
                  {data.movie.tagline}
                  <br />
                </p>
                <div className="__buttons">
                  <Link className="button" to={`/watch/${data.movie.id}`}>
                    <i className="fa fa-play mr-2"></i>WATCH NOW
                  </Link>
                  <button className="button" onClick={addToLocal}>
                    <i className="fa fa-plus mr-2"></i>WATCHLIST
                  </button>
                  {/* <button>
                  <i className="fa fa-share-icon"></i>SHARE
                </button> */}
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className="slidercss"></div>
      </Container>
      <Container>
        <h3 className="ml-3 mb-0">More Like This</h3>
        <TopRated />
      </Container>
    </div>
  );
}

export default Single;
