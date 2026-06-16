import React from "react";
import { useState, useEffect } from "react";

import { slides } from "../data/slides.js";
function HomeSlider() {
  {
    /* adding array with slide image and text*/
  }

  {
    /*adding state to activate slides, first slide - 0, second slide - 1 */
  }
  const [currentSlide, setCurrentSlide] = useState(0);

  {
    /*function to change slide 0 -> 1 */
  }
  function nextSlide() {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  }
  {
    /*function to change slide 1-> 0 */
  }
  function previousSlide() {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  }

  {
    /*
    adding effect to move slides 3 seconds
     */
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1,
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  {
    /*html code */
  }
  return (
    <div
      id="carousel-example-generic"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner" role="listbox">
        {/*loop for slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            id={slide.id}
            className={index === currentSlide ? "item active" : "item"}
            style={{
              background: `url(${slide.image}) no-repeat left center`,
              backgroundSize: "cover",
            }}
          >
            <div className="carousel-caption">
              <div className="caption sfr slider-title">{slide.title}</div>

              <div className="caption sfl slider-subtitle">
                {slide.subtitle}
              </div>

              <a href="#" className="caption sfb btn btn-default btn-lg">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      <div id="home-search-section"></div>
      <a className="left carousel-control" onClick={previousSlide}>
        <span className="glyphicon glyphicon-chevron-left"></span>
        <span className="sr-only">Previous</span>
      </a>

      <a className="right carousel-control" onClick={nextSlide}>
        <span className="glyphicon glyphicon-chevron-right"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default HomeSlider;
