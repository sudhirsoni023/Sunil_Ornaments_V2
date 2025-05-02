import React from "react";
import { Link } from "react-router-dom";
import GoldDiamonds from "../assets/images/Gold-Diamonds.png";
import Instagram from "../assets/images/instagram.png";
import Facebook from "../assets/images/facebook.png";
import Whatsapp from "../assets/images/whatsapp.jpeg";
import GoogleMaps from "../assets/images/google maps.png";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img src={GoldDiamonds} className="Gold-Diamond" alt="gold-diamonds" />
        <div className="containerr">
          <span className="navbar-brand">SUNIL ORNAMENTS</span>
          <div className="slogan">Where trust Matters</div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bill">
                Bill Entry
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More About Us
              </Link>
              <ul
                className="dropdown-menu about"
                aria-labelledby="navbarDropdown"
              >
                <div className="about-us">
                  <strong>
                    <u>Shop Address:</u>
                  </strong>
                </div>
                <div className="address">
                  &nbsp;Phoolchand Chowk, Near Hanuman Chowk Rd, 6th Shop after
                  Phoolchand Bhajiya Wala.
                </div>
                <span>&nbsp;Satna, Madhya Pradesh - (485001)</span>
                <br />
                <br />
                <div className="phone-number">
                  <strong>&nbsp;Contact Number:- 9827617412</strong>
                </div>
                <div className="we-are-open">
                  &nbsp;We're Open From Monday - Saturday, 11.00 AM - 9:30 PM
                  IST
                </div>
                <div className="email">
                  &nbsp;You can reach us at sonis3283@gmail.com with all
                  queries.
                </div>
              </ul>
            </li>
          </ul>

          <span className="social-logos">
            <a
              href="https://maps.app.goo.gl/BLYvoAw6PcWkC1Kk6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GoogleMaps} className="logos" alt="google maps" />
            </a>
          </span>
          <span className="social-logos">
            <a
              href="https://www.instagram.com/sunil_ornaments_satna/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} className="logos" alt="instagram" />
            </a>
          </span>
          <span className="social-logos">
            <a
              href=" https://wa.me/9827617412"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={Whatsapp} className="logos" alt="whatsapp" />
            </a>
          </span>
          <span className="social-logos">
            <a
              href="https://www.facebook.com/profile.php?id=100018336258804"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Facebook} className="logos" alt="facebook" />
            </a>
          </span>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for Gold and Silver Jewellery"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
            <Link to="/logout" className="btn btn-primary ms-2">
              Logout
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
