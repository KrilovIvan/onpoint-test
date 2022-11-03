import React from "react";
import "./MainPage.css";
import blueBranchMainPage from "../../media/blueBranchMainPage.png";
import pinkSpermMainPage from "../../media/pinkSpermMainPage.png";
import bakt1MainPage from "../../media/bakt1MainPage.png";
import bakt2MainPage from "../../media/bakt2MainPage.png";
import virusMainPage from "../../media/virusMainPage.png";
import virus2MainPage from "../../media/virus2MainPage.png";
import pinkSpermSmearedMainPage from "../../media/pinkSpermSmearedMainPage.png";
import baktSmeared1MainPage from "../../media/baktSmeared1MainPage.png";
import baktSmeared2MainPage from "../../media/baktSmeared2MainPage.png";
import arrowIcon from "../../media/arrowIcon.png";

const MainPage = ({ right }) => {
  return (
    <div>
      <div className="mainPage-contaner">
        <img
          className="mainPage__blueBranch"
          src={blueBranchMainPage}
          alt="blueBranch"
        />
        <img
          className="mainPage__pinkSperm"
          src={pinkSpermMainPage}
          alt="pinkSperm"
        />
        <img className="mainPage__bakt1" src={bakt1MainPage} alt="bakt1" />

        <img className="mainPage__bakt2" src={bakt2MainPage} alt="bakt2" />

        <div className="mainPage__virus1-cont">
          <img className="mainPage__virus1" src={virusMainPage} alt="virus1" />
        </div>
        <img className="mainPage__virus2" src={virus2MainPage} alt="virus2" />
        <img
          className="mainPage__pinkSpermSmeared"
          src={pinkSpermSmearedMainPage}
          alt="pinkSpermSmeared"
        />
        <img
          className="mainPage__baktSmeared1"
          src={baktSmeared1MainPage}
          alt="baktSmeared1"
        />
        <img
          className="mainPage__baktSmeared2"
          src={baktSmeared2MainPage}
          alt="baktSmeared2"
        />
        <div className="mainPage__text">
          <span className="mainPage__text__hello">ПРИВЕТ,</span>
          <p className="mainPage__text__title">
            ЭТО <b>НЕ</b>
            <br />
            КОММЕРЧЕСКОЕ
            <br />
            ЗАДАНИЕ
          </p>
        </div>
        <button className="mainPage__button" onClick={right}>
          <div className="mainPage__button__arrow-contaner">
            <img src={arrowIcon} alt="arrow" width="19.5" />
          </div>
          Что дальше?
        </button>
      </div>
    </div>
  );
};

export default MainPage;
