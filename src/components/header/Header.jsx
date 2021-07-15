import React, { useState, useEffect } from "react";
import NavBar from "./common/Navbar";
import Logo from "../logos/logo1";
import { Media, Container, Row, Col } from "reactstrap";
import search from "../../../assets/images/icon/search.png";

const Header = ({ logoName, headerClass, topClass, direction }) => {
  /*=====================
           Pre loader
           ==========================*/
  useEffect(() => {
    setTimeout(function () {
      document.querySelectorAll(".loader-wrapper").style = "display:none";
    }, 2000);

    // if (router.asPath !== "/layouts/Christmas")
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    let number =
      window.pageXOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number >= 300) {
      if (window.innerWidth < 576)
        document.getElementById("sticky").classList.remove("fixed");
      else document.getElementById("sticky").classList.add("fixed");
    } else document.getElementById("sticky").classList.remove("fixed");
  };

  const openNav = () => {
    var openmyslide = document.getElementById("mySidenav");
    if (openmyslide) {
      openmyslide.classList.add("open-side");
    }
  };
  const openSearch = () => {
    document.getElementById("search-overlay").style.display = "block";
  };

  // eslint-disable-next-line

  return (
    <div>
      <header id="sticky" className={`sticky ${headerClass}`}>
        <div className="mobile-fix-option"></div>
        {/*Top Header Component*/}
        {/* {noTopBar ? "" : <TopBarDark topClass={topClass} />} */}

        <Container>
          <Row>
            <Col>
              <div className="main-menu">
                <div className="menu-left">
                  <div className="navbar">
                    <a href={null} onClick={openNav}>
                      <div className="bar-style">
                        {/* <i
                          className="fa fa-bars sidebar-bar"
                          aria-hidden="true"
                        ></i> */}
                      </div>
                    </a>
                    {/*SideBar Navigation Component*/}
                    {/* <SideBar /> */}
                  </div>
                  <div className="brand-logo">
                    {/* <LogoImage logo={logoName} /> */}
                    <Logo />
                    {/* <img src={logo} width="50px" height="50px" alt="logo" /> */}
                  </div>
                </div>
                <div className="menu-right pull-right">
                  {/*Top Navigation Bar Component*/}
                  <NavBar />

                  <div>
                    <div className="icon-nav">
                      <ul>
                        {/* <li className="onhover-div mobile-search">
                          <div>
                            <Media
                              src={search}
                              onClick={openSearch}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </li> */}
                        {/* <Currency icon={settings} />
                          {direction === undefined ? (
                            <CartContainer layout={direction} icon={cart} />
                          ) : (
                            <Cart layout={direction} icon={cart} />
                          )} */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      {/* <SearchOverlay /> */}
    </div>
  );
};

export default Header;
