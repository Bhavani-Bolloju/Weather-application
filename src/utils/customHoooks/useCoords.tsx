import { useEffect } from "react";
import { useAppDispatch } from "../redux-store/hooks";
import { setCoords } from "../redux-store/weatherSlice";

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
const useCoords = function () {
  const dispatch = useAppDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (e) {
        const { latitude: lat, longitude: lng } = e.coords;

        dispatch(setCoords({ lat, lng }));
      },
      function (err) {
        alert(`${err}`);
      },
      options
    );
  }, [dispatch]);

  // return coords;
};

export default useCoords;
