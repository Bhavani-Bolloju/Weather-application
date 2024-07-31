import type { LeafletEvent } from "leaflet";
import { useEffect, useState } from "react";

import { useAppSelector, useAppDispatch } from "../../utils/redux-store/hooks";

import { Marker, Popup, useMapEvents } from "react-leaflet";
import {
  setMapCoords,
  selectSearchType
} from "../../utils/redux-store/weatherSlice";

import { options } from "../../utils/types/types";

function LocationMarker() {
  const { coords, searchType } = useAppSelector((state) => state.weather);
  const dispatch = useAppDispatch();
  const [pickedCoords, setPickedCoords] = useState({ lat: 0, lng: 0 });

  // console.log(searchType);

  const map = useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPickedCoords({ lat: +lat.toFixed(3), lng: +lng.toFixed(3) });
      map.flyTo(e.latlng, map.getZoom());
    }
  });

  useEffect(() => {
    if (coords.lat !== 0 && coords.lng !== 0) {
      map.flyTo({ lat: coords.lat, lng: coords.lng }, map.getZoom());
      setPickedCoords(coords);
    }
  }, [coords, map]);

  const popupHandler = function (e: LeafletEvent) {
    e.target.openPopup();
  };

  const handleSetCoords = function () {
    if (searchType[0].value !== 2) {
      dispatch(selectSearchType([options[1]]));
    }
    dispatch(setMapCoords(pickedCoords));
  };

  return (
    <Marker
      position={[pickedCoords.lat, pickedCoords.lng]}
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
        <div className="w-32 flex flex-col gap-1 text-slate-600 text-md">
          <div className="flex gap-1">
            <span className="font-semibold">Latitude:</span>
            <span>{pickedCoords.lat}</span>
          </div>
          <div className="flex gap-1">
            <span className="font-semibold">Longitude:</span>
            <span>{pickedCoords.lng}</span>
          </div>

          <button
            onClick={handleSetCoords}
            className="self-center bg-slate-600 px-4 py-[2px] text-slate-100 rounded-sm text-md capitalize mt-1 w-full hover:opacity-90"
          >
            set
          </button>
        </div>
      </Popup>
    </Marker>
  );
}

export default LocationMarker;
