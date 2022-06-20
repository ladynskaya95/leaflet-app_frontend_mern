import React from 'react';

import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import SideBar from './components/SideBar/SideBar';
import InfoBar from './components/InfoBar/InfoBar';

import { MapContainer, Marker, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "./components/Map/map.css";
import "../node_modules/leaflet/dist/leaflet.css";
import Layers from './components/Map/Layers';

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";
const position = [50.45, 30.5];

function App() {
  const [data, setData] = React.useState([])
  const [obj, setObj] = React.useState({});

  React.useEffect(() => {
    fetch("http://localhost:3000/adsData.json")
    .then((res) => res.json())
    .then(json => {
      setData(json.items)
    })
  }, [])


const onAddItem = (i) => {
  setObj(data[i]);
};

  return (
    <div className="App">
      <Header />
      <Filter />
      <div className="content">
        <SideBar />
        <MapContainer
          eventHandlers={{ DataView: () => console.log("click") }}
          center={position}
          zoom={12}
          scrollWheelZoom={false}
        >
          <Layers position={position}  />
          <ZoomControl position="bottomright" />
          {data.map((ads) => (
            <Marker
              eventHandlers={{
                click: () => {
                  onAddItem(ads.id);
                },
              }}
              onmousemove={(e) => console.log(e)}
              id={ads.id}
              key={ads.id}
              position={[ads.gps.latitude, ads.gps.longitude]}
            ></Marker>
          ))}
        </MapContainer>
        <InfoBar newObj={obj} items={data} />
      </div>
    </div>
  );
}

export default App;
