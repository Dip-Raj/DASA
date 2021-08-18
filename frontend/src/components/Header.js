import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Nav, Navbar } from "react-bootstrap";
import CloseIcon from "@material-ui/icons/Close";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/components/Header.css";
function Header() {
  const [navbarColor, setNavbarColor] = useState(false);
  const changeHeaderBg = () => {
    if (window.scrollY >= 63) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };
  //forSearchIcon
  const [search, setsearch] = useState(false);

  window.addEventListener("scroll", changeHeaderBg);
  return (
    <div className=" ">
      <Navbar
        onClick={() => {
          setNavbarColor(true);
        }}
        expand="lg"
        fixed="top"
        className={navbarColor ? "headerWhenScrolled" : "headerWhenNotScrolled"}
      >
        <Navbar.Brand
          href="/"
          className={
            "navbar__brand " +
            (navbarColor
              ? "navbar__component__whenScrolled"
              : "navbar__component__whennotscrolled")
          }
        >
          ACHARA
        </Navbar.Brand>
        {/* INside the navbar.collapse will be everything which will be collapsed */}
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="text-right order-lg-0 order-last"
        >
          <Nav className="mr-auto">
            <Nav.Link
              href="/shop"
              className={
                navbarColor
                  ? "navbar__component__whenScrolled"
                  : "navbar__component__whennotscrolled"
              }
            >
              FIND BEAUTIFUL ACHARA
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Toggle
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="">
            <FontAwesomeIcon
              icon={faBars}
              className={
                navbarColor
                  ? "navbar__component__whenScrolled"
                  : "navbar__component__whennotscrolled"
              }
            />
          </span>
        </Navbar.Toggle>
      </Navbar>
    </div>
  );
}

export default Header;
export function SearchBar({ toggleSearch }) {
  return (
    <div className="search__bar">
      <div className="close__icon__container">
        <CloseIcon onClick={toggleSearch} className="close__icon"></CloseIcon>
      </div>
      <div className="searching__bar">
        <input
          type="search"
          placeholder="search"
          className="searching__input"
        />
        <SearchIcon className="search__icon"></SearchIcon>
      </div>
    </div>
  );
}
