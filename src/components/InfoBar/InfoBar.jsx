import React from 'react'
import "./infoBar.css";
import InfoBlock from "./InfoBlock.jsx"

const InfoBar = ({items, newObj}) => {

  return (
    <div className="infowrap">
      {items
        // .filter((key) =>
        //   L.latLngBounds([
        //     [mapBoundaries._southWest.lat, mapBoundaries._southWest.lng],
        //     [mapBoundaries._northEast.lat, mapBoundaries._northEast.lng],
        //   ]).contains([
        //     markers[key].coordinates.latitude,
        //     markers[key].coordinates.longitude,
        //   ])
        // )
        .sort((a, b) => (a.id === newObj.id ? -1 : b.id === newObj.id ? 1 : 0))
        .map((obj) => (
          <InfoBlock
            key={obj.id}
            name={obj.name}
            id={obj.id}
            price={obj.price}
            imageUrl={obj.imageUrl}
            street={obj.address.street}
          />
        ))}
    </div>
  );
};

export default InfoBar;
