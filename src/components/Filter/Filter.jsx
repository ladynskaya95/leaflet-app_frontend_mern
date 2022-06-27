import React from 'react';
import "./filter.css";

export const Filter = () => {

   const [state, setState] = React.useState("");
   const [stateGeo, setStateGeo] = React.useState("");

  return (
    <div className="filter-wrapper">
      <div className="filter-content">
        <img
          className="img-logo"
          src="https://www.gup.ua/images/logo-ua-razom.svg"
          alt=""
        />
        <div>
          <form
            onSubmit={() => console.log("hello")}
            className="filter-content "
          >
            <img
              className="img-cont"
              width="36px"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/VisualEditor_-_Icon_-_Search.svg/768px-VisualEditor_-_Icon_-_Search.svg.png"
              alt="search"
            />

            <input
              className="input"
              placeholder="Я хочу орендувати"
              onChange={(event) => {
                setState(event.target.value);
              }}
              value={state}
            />
            <div className="divider-1"></div>
            <div className="container">
              <div className="row">
                <div className="col-sm1">
                  <svg
                    className="filter-jpg"
                    width="15"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
                      fill="#6c757d"
                    />
                  </svg>
                  Спосіб аренди
                </div>
                <div className="divider-2"></div>
                <div className="col-sm2">
                  <svg
                    className="svg-date"
                    width="17"
                    height="17"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM64 304C64 312.8 71.16 320 80 320H112C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304zM192 304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304zM336 256C327.2 256 320 263.2 320 272V304C320 312.8 327.2 320 336 320H368C376.8 320 384 312.8 384 304V272C384 263.2 376.8 256 368 256H336zM64 432C64 440.8 71.16 448 80 448H112C120.8 448 128 440.8 128 432V400C128 391.2 120.8 384 112 384H80C71.16 384 64 391.2 64 400V432zM208 384C199.2 384 192 391.2 192 400V432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V400C256 391.2 248.8 384 240 384H208zM320 432C320 440.8 327.2 448 336 448H368C376.8 448 384 440.8 384 432V400C384 391.2 376.8 384 368 384H336C327.2 384 320 391.2 320 400V432z" />
                  </svg>
                  <input
                    id="date"
                    type="text"
                    placeholder="Період аренди"
                    disabled
                    onChange={(event) => {
                      setStateGeo(event.target.value);
                    }}
                    value={stateGeo}
                  />
                </div>
                <div className="divider-3"></div>
                <div className="col-sm3">
                  <svg
                    className="svg-map"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M408 120C408 174.6 334.9 271.9 302.8 311.1C295.1 321.6 280.9 321.6 273.2 311.1C241.1 271.9 168 174.6 168 120C168 53.73 221.7 0 288 0C354.3 0 408 53.73 408 120zM288 152C310.1 152 328 134.1 328 112C328 89.91 310.1 72 288 72C265.9 72 248 89.91 248 112C248 134.1 265.9 152 288 152zM425.6 179.8C426.1 178.6 426.6 177.4 427.1 176.1L543.1 129.7C558.9 123.4 576 135 576 152V422.8C576 432.6 570 441.4 560.9 445.1L416 503V200.4C419.5 193.5 422.7 186.7 425.6 179.8zM150.4 179.8C153.3 186.7 156.5 193.5 160 200.4V451.8L32.91 502.7C17.15 508.1 0 497.4 0 480.4V209.6C0 199.8 5.975 190.1 15.09 187.3L137.6 138.3C140 152.5 144.9 166.6 150.4 179.8H150.4zM327.8 331.1C341.7 314.6 363.5 286.3 384 255V504.3L192 449.4V255C212.5 286.3 234.3 314.6 248.2 331.1C268.7 357.6 307.3 357.6 327.8 331.1L327.8 331.1z" />
                  </svg>
                  Де шукати?
                </div>
              </div>
            </div>
            <span value="Пошук" className="btn-search">
              Пошук
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Filter;