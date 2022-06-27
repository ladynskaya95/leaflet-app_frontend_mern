import React from "react";
import { useMapEvents, TileLayer, LayersControl } from "react-leaflet";
import L from "leaflet"


const Layers = ({position, markers}) => {
  const [geo, setGeo] = React.useState({});
  const [zoom, setZoom] = React.useState(13);
  const [bounds, setBounds] = React.useState(null);
  const [marker, setMarker] = React.useState({});

  const map = useMapEvents({
    zoomend: () => {
      setGeo(map.getBounds());
    },
  });
  console.log(geo);

  // let h = markers.filter((key) =>
  //   map
  //     .latLngBounds([
  //       [geo._southWest.LatLng.lat, geo._southWest.LatLng.lng],
  //       [geo._northEast.LatLng.lat, geo._northEast.LatLng.lng],
  //     ])
  //     .contains([
  //       markers[key].gps.latitude,
  //       markers[key].gps.longitude,
  //     ])
  // );
  // console.log(h)

  // let m = geo.latLngBounds().contains(position);
  // console.log(m)

  // const  visibles = {};
  //   for (let i=0; i <markers.length; i++) {
  //       if (map.getBounds().contains(markers[i].gps)) {
  //           visibles[i] = markers[i];
  //       }
  //   }
  //   console.log(visibles)


  // const getLt = markers[1].getLatLng();
  // console.log(getLt);

  //   React.useEffect(() => {
  // const visibles = {};
  //     if (map ) {
  //       for (let i = 0; i < markers.length; i++) {
  //         if (map.getBounds().contains(markers[i].gps)) {
  //           visibles[i] = markers[i];
  //         }
  //       }
  //       console.log(visibles);
  //     }
  //   },[map, markers] );

  //  const rtt = map.getBounds().contains(pos);
  //  console.log(rtt);
  // React.useEffect(() => {

  //   if (map ) {
  //     const rtt = map.getBounds().contains(pos);
  //     console.log(rtt);
  //   }
  // }, );

  // const rtt = map.getBounds().contains(markers)
  // console.log(rtt)

  // React.useEffect(() => {
  //   if (map) {
  //     const contains = map.getBounds().contains(position);
  //     console.log("contains:: ", contains);
  //   }
  // }, [position, map]);

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
