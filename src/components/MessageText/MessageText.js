import React, { useState, useRef } from "react";
import "./MessageText.css";
import sperm1 from "../../media/sp1.png";
import sperm2 from "../../media/sp2.png";
import sperm3 from "../../media/sp3.png";
import sperm4 from "../../media/sp4.png";
import sperm5 from "../../media/sp5.png";

const MessageText = ({ offset }) => {
  const [range, setRange] = useState(0);
  const topRef = useRef(null);
  const scroll = (e) => {
    setRange(e?.target?.value);
    topRef.current.scrollTop = range;
  };
  return (
    <div className="MessageText-contaner">
      <img
        src={sperm1}
        alt="sperm1"
        className={offset === -1024 ? "sperm1-animated" : "sperm1"}
      />
      <img
        src={sperm2}
        alt="sperm2"
        className={offset === -1024 ? "sperm2-animated" : "sperm2"}
      />
      <img
        src={sperm3}
        alt="sperm3"
        className={offset === -1024 ? "sperm3-animated" : "sperm3"}
      />
      <img
        src={sperm4}
        alt="sperm4"
        className={offset === -1024 ? "sperm4-animated" : "sperm4"}
      />
      <img
        src={sperm5}
        alt="sperm5"
        className={offset === -1024 ? "sperm5-animated" : "sperm5"}
      />
      <div className="MessageText__text-contaner">
        <p className="MessageText__title">
          ТЕКСТ
          <br />
          СООБЩЕНИЯ
        </p>
        <input
          type="range"
          min="0"
          max="170"
          step="2"
          onChange={scroll}
          id="r1"
          value={range}
        />
        <div
          className="MessageText__text"
          id="text"
          ref={topRef}
          style={{ scrollTop: { range } }}
        >
          <b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut morbi
          tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam eget
          felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi etiam
          dignissim diam quis enim lobortis. Est sit amet facilisis magna. Neque
          laoreet suspendisse interdum consectetur libero id. Nec ullamcorper
          sit amet risus nullam eget felis eget. Mollis aliquam ut porttitor leo
          a diam sollicitudin tempor id. Euismod quis viverra nibh cras pulvinar
          mattis nunc. Massa massa ultricies mi quis. Sit amet massa vitae
          tortor condimentum lacinia. Et malesuada fames ac turpis egestas
          integer eget. Elementum pulvinar etiam non quam lacus suspendisse
          faucibus interdum posuere. Amet justo donec enim diam vulputate ut
          pharetra sit. Risus ultricies tristique nulla aliquet enim tortor at
          auctor. Velit sed ullamcorper morbi tincidunt ornare massa. Quis
          hendrerit dolor magna eget est lorem ipsum. Etiam dignissim diam quis
          enim. Gravida neque convallis a cras. Ut enim blandit volutpat
          maecenas volutpat. Mauris sit amet massa vitae tortor condimentum
          lacinia quis vel.
        </div>
      </div>
    </div>
  );
};

export default MessageText;
