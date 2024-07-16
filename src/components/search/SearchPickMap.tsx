import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents
} from "react-leaflet";
import type { LatLng } from "leaflet";
import { useEffect, useState } from "react";

import "leaflet/dist/leaflet.css";

import { useAppSelector } from "../../utils/redux-store/hooks";

function LocationMarker() {
  const coords = useAppSelector((state) => state.weather.coords);

  // console.log(coords);

  const [position, setPosition] = useState({
    lat: 0,
    lon: 0
  });

  // console.log(position, "position");

  // useEffect(() => {
  //   setPosition(coords);
  // }, [coords]);

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      console.log(e);
      // setPosition({ lat: e.latitude, lon: e.longitude });
    }
  });

  useEffect(() => {
    map.flyTo({ lat: coords.lat, lng: coords.lon }, map.getZoom());
    setPosition(coords);
  }, [coords, map]);

  return position === null ? null : (
    <Marker position={[position.lat, position.lon]}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function SearchPickMap() {
  // const handleClick = function (e) {
  //   console.log(e);
  // };

  return (
    <div>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-[70vh]"
        // onClick={handleClick}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
        <LocationMarker></LocationMarker>
      </MapContainer>
    </div>
  );
}

export default SearchPickMap;
