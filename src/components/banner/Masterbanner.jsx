import { Col, Container, Row } from "reactstrap";
import React from "react";

const MasterBanner = ({ img, title, desc, classes, btn, btnClass }) => {
  return (
    <div>
      <div className={`home ${img} ${classes ? classes : "text-center"}`}>
        <Container>
          <Row>
            <Col>
              <div className="slider-contain">
                <div>
                  <h4>{title}</h4>
                  <h1>{desc}</h1>
                  {/* <Link href={link}>
                    <a className={`btn btn-solid ${btnClass ? btnClass : ""}`}>
                      {btn ? btn : "Shop Now"}{" "}
                    </a>
                  </Link> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MasterBanner;
