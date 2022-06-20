import React from 'react'

import "./header.css";

 const Header = () => {
  return (
    <div className="head-wrapper">
      <div className="content">
        <div className="column-left">
          <p className="head">
            Портал оренди та прокату <br />
            товарів та послуг
          </p>
        </div>
        <div className="column-center">
          <button className="btn-orange">Здати в оренду</button>
          <svg
            className="svg-plus"
            width="15"
            height="15"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#FFFFFF"
            />
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
        <div className="column-right">
          <span className="login-wr">
            <p className="login"> Увійти</p>
            <svg
              className="svg-login"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 512 512"
            >
              <path
                d="M344.7 238.5l-144.1-136C193.7 95.97 183.4 94.17 174.6 97.95C165.8 101.8 160.1 110.4 160.1 120V192H32.02C14.33 192 0 206.3 0 224v64c0 17.68 14.33 32 32.02 32h128.1v72c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C354.3 264.4 354.3 247.6 344.7 238.5zM416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32z"
                fill="#FFFFFF"
              />
            </svg>
          </span>
          <div className="divider-head-1"></div>

          <span className="ua">
            UA
            <svg
              className="down"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              width="15"
              height="15"
            >
              <path
                d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
                fill="#FFFFFF"
              />
            </svg>
          </span>

          <span className="val">
            ГРН
            <svg
              className="down"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              width="15"
              height="15"
            >
              <path
                d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
                fill="#FFFFFF"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Header;
