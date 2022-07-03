import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import SliderData from "./SliderData";
import "../carousel/ImageSlider.css";
import { Grid } from "@material-ui/core";
import commonClasses from "../UI/classes";

const ImageSlider = ({ slides }) => {
  const classes = commonClasses();

  const [current, setCurrent] = useState(0);

  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Grid item container className="slider">
      <Grid item>
        <FaArrowAltCircleLeft className="left_arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right_arrow" onClick={nextSlide} />
      </Grid>
      {SliderData.map((slide, index) => {
        return (
          <Grid
            xs={10}
            item
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travel image" className="image" />
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ImageSlider;
