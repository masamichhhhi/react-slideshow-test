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
    <div className="each-slide" style={{ margin: "50px" }}>
      <div>{props.imageUrl}</div>
    </div>
  );
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide infinite={false}>
        {slideImages.map((slideImage, index) => (
          <Image key={index} imageUrl={slideImage.url} />
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
