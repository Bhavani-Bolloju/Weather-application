import type { LeafletEvent } from "leaflet";
import { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../utils/redux-store/hooks";

import { Marker, Popup, useMapEvents } from "react-leaflet";
import { setMapCoords } from "../../utils/redux-store/weatherSlice";

function LocationMarker() {
  const { coords, mapCoords } = useAppSelector((state) => state.weather);
  const dispatch = useAppDispatch();

  const map = useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      dispatch(setMapCoords({ lat, lng }));
      map.flyTo(e.latlng, map.getZoom());
    },
    add(e) {
      console.log("add", e);
    }
  });

  useEffect(() => {
    if (coords.lat !== 0 && coords.lng !== 0) {
      map.flyTo({ lat: coords.lat, lng: coords.lng }, map.getZoom());
      // setPosition(coords);
      dispatch(setMapCoords(coords));
    }
  }, [coords, map, dispatch]);

  const popupHandler = function (e: LeafletEvent) {
    e.target.openPopup();
  };

  return (
    <Marker
      position={[mapCoords.lat, mapCoords.lng]}
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
        <span>{mapCoords.lat.toFixed(2)}</span>
        <br />
        <span>Longitude:</span>
        <span>{mapCoords.lng.toFixed(2)}</span>
      </Popup>
    </Marker>
  );
}

export default LocationMarker;
