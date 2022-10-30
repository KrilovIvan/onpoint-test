import React, { useState } from "react";
import "./Modal.css";
import FirstPage from "./Pages/FirstPage";
import SecPage from "./Pages/SecPage";
import close from "../../media/close.png";
import btn_left from "../../media/btn_left.png";
import btn_right from "../../media/btn_right.png";
const Modal = ({ closePage }) => {
  const [vieWSecPage, setVieWSecPage] = useState(false);
  return (
    <>
      <div className="modal" />
      <div className="modal-contaner">
        <div className="modal-contaner__title">
          <div className="modal-contaner__title-advant-close">
            <span className="modal-contaner__title-advant">ПРЕИМУЩЕСТВА</span>
            <img
              src={close}
              alt="close"
              className="close-modal"
              onClick={closePage}
            />
          </div>
          <div className="modal-contaner__title-brend">
            BREND<b style={{ fontFamily: "Gilroy ExtraBold" }}>XY</b>
          </div>
        </div>
        <div className="modal-contaner__pages">
          {vieWSecPage ? <SecPage /> : <FirstPage />}
        </div>
        <div className="modal-buttons">
          <button
            className="modal-buttons__btn-cont"
            onClick={() => {
              setVieWSecPage(false);
            }}
          >
            <img
              src={btn_left}
              alt="btnleft"
              className="modal-buttons__btn-left"
            />
          </button>
          <div className={vieWSecPage ? "circle" : "circle-pink"} />
          <div className={!vieWSecPage ? "circle" : "circle-pink"} />
          <button
            className="modal-buttons__btn-cont"
            onClick={() => {
              setVieWSecPage(true);
            }}
          >
            <img
              src={btn_right}
              alt="btnleft"
              className="modal-buttons__btn-right"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
