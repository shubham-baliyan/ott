import React from "react";
import { Container, Row, Col } from "reactstrap";

const TopBarDark = ({ topClass, fluid }) => {
  //   const router = useRouter();
  const firebaseLogout = () => {};
  return (
    <div className={topClass}>
      <Container fluid={fluid}>
        <Row>
          <Col lg="6">
            <div className="header-contact">
              <ul>
                <li>Welcome to AstroLogy</li>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>Call Us: 123
                  - 456 - 7890
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="6" className="text-right">
            <ul className="header-dropdown">
              <li className="mobile-wishlist">
                wishlist
                {/* <Link href="/page/account/wishlist">
                  <a>
                    <i className="fa fa-heart" aria-hidden="true"></i> wishlist
                  </a>
                </Link> */}
              </li>
              <li className="onhover-dropdown mobile-account">
                <i className="fa fa-user" aria-hidden="true"></i> My Account
                <ul className="onhover-show-div">
                  <li>
                    Login
                    {/* <Link href={`/page/account/login`}>
                      <a>Login</a>
                    </Link> */}
                  </li>
                  <li>
                    Register
                    {/* <Link href={`/page/account/register`}>
                      <a>Register</a>
                    </Link> */}
                  </li>
                  <li onClick={() => firebaseLogout()}>
                    <a href="#">Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBarDark;
