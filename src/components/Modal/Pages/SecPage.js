import React from "react";
import "./Pages.css";
const SecPage = () => {
  const textSec = [
    "Mi bibendum neque egestas congue quisque egestas diam",
    "Venenatis lectus magna fringilla urna",
    "Venenatis lectus magna fringilla urna ",
  ];
  const textSecMap = textSec.map((el) => {
    return (
      <div className="pages__cont" key={textSec.indexOf(el)}>
        <span className="pages__num">{`0${textSec.indexOf(el) + 4}`}</span>
        <p className="pages__text">{el}</p>
      </div>
    );
  });
  return <div className="page-contaner">{textSecMap}</div>;
};

export default SecPage;
