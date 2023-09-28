import "./Carousel2.css";
import { useState } from "react";
import Banner1 from "../Images/robotcleaner_banner.jpg";
import Banner2 from "../Images/instax_banner (1).png";
import Banner3 from "../Images/lens_banner.png";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function Carousel2() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [Banner1, Banner2, Banner3];
  const handleChangeSlide = (direction) => {
    if (direction == "left") {
      if (currentImageIndex == 0) {
        setCurrentImageIndex(images.length - 1);
      } else {
        setCurrentImageIndex(currentImageIndex - 1);
      }
    }
    if (direction == "right") {
      if (currentImageIndex == images.length - 1) {
        setCurrentImageIndex(0);
      } else {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    }
  };
  return (
    <div className="carousel-window">
      <img
        className="banner-image banner-animation"
        src={images[currentImageIndex]}
        alt=""
      />
      <div className="carousel-overlay">
        <BsFillArrowLeftCircleFill
          className="arrow"
          color="#FB9122FF"
          size={50}
          onClick={() => {
            handleChangeSlide("left");
          }}
        />
        <BsFillArrowRightCircleFill
          color="#FB9122FF"
          size={50}
          onClick={() => {
            handleChangeSlide("right");
          }}
        />
      </div>
      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}
