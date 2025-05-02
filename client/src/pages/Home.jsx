import React from "react";
import BG1 from "../assets/images/BG-1.png";
import BG2 from "../assets/images/BG-2.JPG";
import BG3 from "../assets/images/BG-3.jpg";
import BG4 from "../assets/images/BG-4.jpg";
import BG5 from "../assets/images/BG-5.jpg";
import BG6 from "../assets/images/BG-6.jpg";
import NavBar from "../components/NavBar";
const Home = () => {
  return (
    <section>
      <NavBar />
      {/* <!-- Bootstrap Carousel/Slider Starts here --> */}
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={BG1} className="d-block w-100" alt="BG-1" />
          </div>
          <div className="carousel-item">
            <img src={BG2} className="d-block w-100" alt="BG-2" />
          </div>
          <div className="carousel-item">
            <img src={BG3} className="d-block w-100" alt="BG-3" />
          </div>
          <div className="carousel-item">
            <img src={BG4} className="d-block w-100" alt="BG-4" />
          </div>
          <div className="carousel-item">
            <img src={BG5} className="d-block w-100" alt="BG-5" />
          </div>
          <div className="carousel-item">
            <img src={BG6} className="d-block w-100" alt="BG-6" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* <!-- Bootstrap Carousel/Slider Ends here --> */}
    </section>
  );
};

export default Home;
