import React from "react";
import { useMapEvents, TileLayer, LayersControl } from "react-leaflet";

const Layers = ({position}) => {
  const [geo, setGeo] = React.useState({});
  const [zoom, setZoom] = React.useState(13);
  const [bounds, setBounds] = React.useState(null);

  const map = useMapEvents({
    zoomend: () => {
      setGeo(map.getBounds());
       
    },
  });
  console.log(geo);
//       const  visibles = {};
//         for (let i=0; i <items.length; i++) {
//             if (map.getBounds().contains(items[i].gps)) {
//                 visibles[i] = items[i];
//             }
//         }
//         console.log(visibles)


    React.useEffect(() => {
      if (map) {
        const contains = map.getBounds().contains(position);
        console.log("contains:: ", contains);
      }
    }, [position, map]);

  function updateMap() {
    const b = map.getBounds();
    setBounds([
      b.getSouthWest().lng,
      b.getSouthWest().lat,
      b.getNorthEast().lng,
      b.getNorthEast().lat,
    ]);
    setZoom(map.getZoom());
    console.log(b);
  }

  React.useEffect(() => {
    updateMap();
  }, []);

  return (
    <>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Basic Map">
          <TileLayer
            attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="REAL Map">
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          />
        </LayersControl.BaseLayer>
      </LayersControl>
    </>
  );
};

export default Layers;
