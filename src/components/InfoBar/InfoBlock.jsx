import React from 'react'


const InfoBlock = ({ name, id, price, imageUrl, street }) => {


  return (
    <div className="adsInf">
      <div className="infoBlock">
        <div id={id}>
          <img src={imageUrl} alt="img"></img>
          <h1>{name}</h1>
          <h2>{street}</h2>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};
export  default InfoBlock;