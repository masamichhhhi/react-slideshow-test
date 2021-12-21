import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "images/slide_2.jpg",
    caption: "Slide 1",
  },
  {
    url: "images/slide_3.jpg",
    caption: "Slide 2",
  },
  {
    url: "images/slide_4.jpg",
    caption: "Slide 3",
  },
];

const Image = (props: { imageUrl: string }) => {
  return (
    <div className="each-slide">
      <img src={props.imageUrl} alt="slide"></img>
    </div>
  );
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <Image key={index} imageUrl={slideImage.url} />
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
