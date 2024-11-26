import React, { useState, useEffect, useCallback } from "react";
import "./Home.css";
import Form from './Form'; // Import the Form component

function CustomCarousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  const slideNext = useCallback(() => {
    setActiveIndex((val) => (val >= children.length - 1 ? 0 : val + 1));
  }, [children.length]);

  const slidePrev = useCallback(() => {
    setActiveIndex((val) => (val <= 0 ? children.length - 1 : val - 1));
  }, [children.length]);

  const AutoPlayStop = () => {
    if (timeID) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000)
      );
    }
    return () => {
      if (timeID) {
        clearTimeout(timeID);
      }
    };
  }, [slideDone, slideNext, timeID]);

  return (
    <div
      className="container__slider"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      {children.map((item, index) => (
        <div
          key={index}
          className={`slider__item ${activeIndex === index ? "slider__item-active-show" : "slider__item-active-hide"}`}
          style={item.props.style}
        >
          {item}
        </div>
      ))}

      <div className="container__slider__links">
        {children.map((_, index) => (
          <button
            key={index}
            className={activeIndex === index ? "container__slider__links-small container__slider__links-small-active" : "container__slider__links-small"}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>

      <button className="slider__btn-next" onClick={slideNext}>
        {">"}
      </button>
      <button className="slider__btn-prev" onClick={slidePrev}>
        {"<"}
      </button>
    </div>
  );
}

function Home() {
  const slides = [
    {
      imgURL: "https://s7ap1.scene7.com/is/image/incredibleindia/vittala-temple-hampi-karnataka-5-attr-hero?qlt=82&ts=1726721311464",
      imgAlt: "Slide 1",
      title: "Explore India with India Travel",
      description: "Experience the luxury of India's scenic trains.",
    },
    {
      imgURL: "https://www.ekeralatourism.net/wp-content/uploads/2016/11/five-three.jpg",
      imgAlt: "Slide 2",
      title: "Discover the Heritage",
      description: "Explore ancient Indian culture and traditions.",
    },
    {
      imgURL: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Gol_Gumbaj2.JPG",
      imgAlt: "Slide 3",
      title: "Unveil the Natural Beauty",
      description: "Immerse yourself in India's breathtaking landscapes.",
    },
    {
        imgURL: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1255/Large-Houseboat-of-Kerala.jpg",
        imgAlt: "Slide 3",
        title: "Unveil the Natural Beauty",
        description: "Immerse yourself in India's breathtaking landscapes.",
        
      },
      {
        imgURL: "https://www.aanavandi.com/blog/wp-content/uploads/2019/08/ksrtc-munnar-Riyas-Paloli%E2%80%8E.jpg",
        imgAlt: "Slide 3",
        title: "Unveil the Natural Beauty",
        description: "Immerse yourself in India's breathtaking landscapes.",
      },
  ];

  return (
    <div className="home">
      <CustomCarousel>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{ backgroundImage: `url(${slide.imgURL})` }}
          >
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <button className="btn">Book Now</button>
            </div>
          </div>
        ))}
      </CustomCarousel>
      <Form /> {/* Include the Form component */}
    </div>
  );
}

export default Home;



