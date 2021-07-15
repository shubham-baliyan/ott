import React from "react";
import { Container } from "reactstrap";

function card(props) {
  return (
    <Container>
      <div className="__container">
        <div className="img">
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8293/978293-v"
            alt=""
          />
        </div>
        <div className="__details">
          <h4>Out of Love</h4>
          <h5>
            1 hr 41 min ,Romance,Drama
            <br />
            Hindi,2021
          </h5>
          <p>
            It is a long established fact that a reader will be distracted{" "}
            <br />
            by the readable content of a page when looking at its layout.
          </p>
          <button>
            <i className="fa fa-play"></i> WATCH NOW
          </button>
          <button>
            <i className="fa fa-plus"></i>ADD TO WATCHLIST
          </button>
        </div>
      </div>
    </Container>
  );
}

export default card;
