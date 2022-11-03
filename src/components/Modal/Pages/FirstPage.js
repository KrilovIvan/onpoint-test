import React from "react";
import "./Pages.css";
const FirstPage = () => {
  const textFir = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Faucibus pulvinar elementum integer enim",
    "Faucibus pulvinar elementum integer enim ",
  ];
  const textFirMap = textFir.map((el) => {
    return (
      <div className="pages__cont" key={textFir.indexOf(el)}>
        <span className="pages__num">{`0${textFir.indexOf(el) + 1}`}</span>
        <p className="pages__text">{el}</p>
      </div>
    );
  });
  return <div className="page-contaner">{textFirMap}</div>;
};

export default FirstPage;
