import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import LocationMarker from "./LocationMarker";

function SearchPickMap() {
  return (
    <div>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-[600px] rounded-sm"
        closePopupOnClick={false}
        doubleClickZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default SearchPickMap;
