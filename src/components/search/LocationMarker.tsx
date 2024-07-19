import type { LeafletEvent } from "leaflet";
import { useEffect, useState } from "react";

import { useAppSelector } from "../../utils/redux-store/hooks";

import { Marker, Popup, useMapEvents } from "react-leaflet";

function LocationMarker() {
  const coords = useAppSelector((state) => state.weather.coords);

  const [position, setPosition] = useState({
    lat: 0,
    lon: 0
  });

  const map = useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition({ lat: lat, lon: lng });
      map.flyTo(e.latlng, map.getZoom());
    },
    add(e) {
      console.log("add", e);
    }
  });

  useEffect(() => {
    if (coords.lat !== 0 && coords.lon !== 0) {
      map.flyTo({ lat: coords.lat, lng: coords.lon }, map.getZoom());
      setPosition(coords);
    }
  }, [coords, map]);

  const popupHandler = function (e: LeafletEvent) {
    e.target.openPopup();
  };

  return (
    <Marker
      position={[position.lat, position.lon]}
      eventHandlers={{
        add: popupHandler
      }}
    >
      <Popup
        closeOnClick={false}
        closeButton={true}
        autoClose={false}
        closeOnEscapeKey={false}
      >
        <span>Latitude:</span>
        <span>{position.lat.toFixed(2)}</span>
        <br />
        <span>Longitude:</span>
        <span>{position.lon.toFixed(2)}</span>
      </Popup>
    </Marker>
  );
}

export default LocationMarker;
