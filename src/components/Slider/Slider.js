import React, { useState } from "react";
import "./Slider.css";
import homeIcon from "../../media/homeIcon.png";
import logo from "../../media/logo.png";
import MainPage from "../MainPage/MainPage";
import MessageText from "../MessageText/MessageText";
import KeyMessage from "../KeyMessage/KeyMessage";
const PAGE_WIDTH = 1024;

const Slider = () => {
  const [offset, setOffset] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const left = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      return Math.min(newOffset, 0);
    });
  };
  const right = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;
      return Math.max(newOffset, -2048);
    });
  };
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 8) {
      right();
    }

    if (diff < -8) {
      left();
    }

    setTouchPosition(null);
  };
  return (
    <div className="slider">
      <img
        className="homeIcon"
        src={homeIcon}
        alt="homebutton"
        onClick={() => {
          setOffset(0);
        }}
      />

      <div className="slider-contaner">
        <div
          className="slider-contaner__window"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className="slider-contaner__all-pages-contaner"
            style={{ transform: `translateX(${offset}px)` }}
          >
            <MainPage right={right} />
            <MessageText offset={offset} />
            <KeyMessage />
          </div>
        </div>
      </div>
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
};

export default Slider;
