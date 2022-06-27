import React from 'react';

import { MapContainer, Marker, ZoomControl } from "react-leaflet";
import L from "leaflet";

import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import SideBar from './components/SideBar/SideBar';
import InfoBar from './components/InfoBar/InfoBar';
import Layers from "./components/Map/Layers";
import Modal from "./components/Modal/Modal";
import Login from "./components/Login/Login"

import AppContext from './AppContext'


import "./components/Map/map.css";
import "../node_modules/leaflet/dist/leaflet.css";



L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";
const position = [50.45, 30.5];

function App() {
  const [data, setData] = React.useState([]);
  const [obj, setObj] = React.useState({});
  const [modalActive, setModalActive] = React.useState(false);
  const [loginActive, setLoginActive] = React.useState(false);

  React.useEffect(() => {
    fetch("http://localhost:3000/adsData.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json.items);
      });
  }, []);


  const onAddItem = (i) => {
    setObj(data[i]);
  };

  return (
    <AppContext.Provider
      value={{ modalActive, loginActive, setModalActive, setLoginActive }}
    >
      <div className="App">
        <Modal />
        <Login />
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
            <Layers position={position} markers={data} />
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
    </AppContext.Provider>
  );
}

export default App;
