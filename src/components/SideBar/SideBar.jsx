import React from 'react';

import "./sidebar.css"

import Categories from "./Navigator.jsx";
import Rating from "./Rating/Rating.jsx";
import Checkbox from "./Checkbox.jsx";

const SideBar = () => {
const [stateMin, setStateMin] = React.useState("");
const [stateMax, setStateMax] = React.useState("");
const [state, setState] = React.useState("");

  return (
    <div className="nav-wrapper">
      <input
        onChange={(event) => {
          setState(event.target.value);
        }}
        value={state}
        type="checkbox"
        id="check"
      />
      <label htmlFor="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fa-regular fa-angle-left" id="cancel"></i>
      </label>

      <div className="sidebar">
        <header>
          <span className="nav-btn-header">
            <p>Переглянути список</p>
            <svg
              className="nav-svg-map"
              width="14"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                d="M408 120C408 174.6 334.9 271.9 302.8 311.1C295.1 321.6 280.9 321.6 273.2 311.1C241.1 271.9 168 174.6 168 120C168 53.73 221.7 0 288 0C354.3 0 408 53.73 408 120zM288 152C310.1 152 328 134.1 328 112C328 89.91 310.1 72 288 72C265.9 72 248 89.91 248 112C248 134.1 265.9 152 288 152zM425.6 179.8C426.1 178.6 426.6 177.4 427.1 176.1L543.1 129.7C558.9 123.4 576 135 576 152V422.8C576 432.6 570 441.4 560.9 445.1L416 503V200.4C419.5 193.5 422.7 186.7 425.6 179.8zM150.4 179.8C153.3 186.7 156.5 193.5 160 200.4V451.8L32.91 502.7C17.15 508.1 0 497.4 0 480.4V209.6C0 199.8 5.975 190.1 15.09 187.3L137.6 138.3C140 152.5 144.9 166.6 150.4 179.8H150.4zM327.8 331.1C341.7 314.6 363.5 286.3 384 255V504.3L192 449.4V255C212.5 286.3 234.3 314.6 248.2 331.1C268.7 357.6 307.3 357.6 327.8 331.1L327.8 331.1z"
                fill="#ffffff"
              />
            </svg>
          </span>
        </header>
        <div className="sidebarWrap">
          <Categories />
          <div className="price">
            <h2>ЦІНА ОРЕНДИ (ГРН)</h2>
            <div className="divider"></div>
            <label>
              <input
                onChange={(event) => {
                  setStateMin(event.target.value);
                }}
                value={stateMin}
                className="inp-pr"
                type="text"
                placeholder="MIN"
              />
            </label>
            <label>
              <input
                onChange={(event) => {
                  setStateMax(event.target.value);
                }}
                value={stateMax}
                className="inp-pr"
                type="text"
                placeholder="MAX"
              />
            </label>
          </div>
          <Checkbox />
          <div className="rating">
            <b>Оцініть цю категорію</b>
            <Rating />
            <p>Всього голосів: 37</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;