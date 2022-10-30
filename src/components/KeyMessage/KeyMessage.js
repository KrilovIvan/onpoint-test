import React, { useState } from "react";
import "./KeyMessage.css";
import bottle from "../../media/bottle1.png";
import plus from "../../media/plus.png";
import eat from "../../media/eat.png";
import calendar from "../../media/calendar.png";
import Modal from "../Modal/Modal";
import buble1 from "../../media/buble1.png";
import buble2 from "../../media/buble2.png";
import buble3 from "../../media/buble3.png";
import buble4 from "../../media/buble4.png";
import buble5 from "../../media/buble5.png";
import buble6 from "../../media/buble6.png";
import buble7 from "../../media/buble7.png";
import buble8 from "../../media/buble8.png";

const KeyMessage = () => {
  const [viewPages, setViewPages] = useState(false);
  const closePage = () => {
    setViewPages(false);
  };
  return (
    <div>
      <div className="KeyMessage-contaner">
        <img src={buble1} alt="buble1" className="buble1" />
        <img src={buble2} alt="buble2" className="buble2" />
        <img src={buble3} alt="buble3" className="buble3" />
        <img src={buble4} alt="buble4" className="buble4" />
        <img src={buble5} alt="buble5" className="buble5" />
        <img src={buble6} alt="buble6" className="buble6" />
        <img src={buble7} alt="buble7" className="buble7" />
        <img src={buble8} alt="buble8" className="buble8" />

        <div className="KeyMessage__content-contaner">
          <img src={bottle} alt="bottle" className="bottle-image" />
          <div className="KeyMessage__content">
            <div className="KeyMessage__title-content">
              <span className="KeyMessage__title-key">КЛЮЧЕВОЕ СООБЩЕНИЕ</span>
              <br />
              <div className="KeyMessage__title-brend">
                BREND<b style={{ fontFamily: "Gilroy ExtraBold" }}>XY</b>
              </div>
            </div>
            <div className="KeyMessage__content-windows">
              <div className="KeyMessage__content-windows__eat">
                <img
                  className="KeyMessage__content-windows__icon-eat"
                  src={eat}
                  alt="eat"
                />
                <p className="KeyMessage__content-windows__text">
                  Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus
                  vestibulum lorem sed risus ultricies
                </p>
              </div>
              <div className="KeyMessage__content-windows__calendar">
                <img
                  className="KeyMessage__content-windows__icon-calendar"
                  src={calendar}
                  alt="calendar"
                />
                <p className="KeyMessage__content-windows__text">
                  A arcu cursus vitae
                </p>
              </div>
              <button
                className="button-details"
                onClick={() => {
                  setViewPages(true);
                }}
              >
                <div className="button-details__plus-contaner">
                  <img src={plus} alt="plus" width="12.6" />
                </div>
                Подробнее
              </button>
            </div>
          </div>
        </div>
      </div>
      {viewPages && <Modal closePage={closePage} />}
    </div>
  );
};

export default KeyMessage;
