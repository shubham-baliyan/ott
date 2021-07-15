import React from "react";
import { Link } from "react-router-dom";

const CardSingle = ({ item }) => {
  const addToLocal = () => {
    let items = JSON.parse(localStorage.getItem("watchList"));
    let obj = items.find((i) => i.id === item.id);
    if (!obj) items.push(item);
    localStorage.setItem("watchList", JSON.stringify(items));
  };
  return (
    <Link to={`/single/${item.id}`}>
      <div className="card__container">
        <div>
          <img
            className="card__img loaderGif"
            width="180px"
            height="288px"
            loading="lazy"
            src={item.poster.replace("original", "w185")}
            alt={item.title}
          />
        </div>
        <div className="card__details">
          <h1 className="card__h1">{item.title}</h1>
          <h2 className="card__h2">
            {item.runtime}, <br />
          </h2>
          <p className="card__p">{item.tagline}</p>
          <Link className="card__button text-white" to={`/single/${item.id}`}>
            <i className="fa fa-play mr-2"></i>
            Watch now
          </Link>
          <button className="card__button" onClick={addToLocal}>
            <i className="fa fa-plus mr-2"></i>
            {/* <Link className="card__button--link" to={`/single/${item.id}`}> */}
            Add to WatchList
            {/* </Link> */}
          </button>
        </div>
      </div>
    </Link>
  );
};
export default CardSingle;
