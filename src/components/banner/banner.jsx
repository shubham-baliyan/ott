import React, { Fragment } from "react";
import Slider from "react-slick";

import MasterBanner from "./Masterbanner";

const Data = [
  {
    img: "home3",
    title: "Harry Potter",
    desc: "Harry Potter",
    // link: "/left-sidebar/collection ",
  },
  {
    img: "home2",
    title: "Avengers Endgame",
    desc: "",
    // link: "/left-sidebar/collection ",
  },
  {
    img: "home1",
    title: "Dark",
    desc: "",
    // link: "/left-sidebar/collection ",
  },
];

const Banner = () => {
  return (
    <Fragment>
      <section className="p-0">
        <Slider className="slide-1 home-slider">
          {Data.map((data, i) => {
            return (
              <MasterBanner
                key={i}
                img={data.img}
                desc={data.desc}
                title={data.title}
                // link={data.link}
              />
            );
          })}
        </Slider>
      </section>
    </Fragment>
  );
};

export default Banner;
