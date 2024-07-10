import { useEffect } from "react";
import { useAppDispatch } from "../redux-store/hooks";
import { setCoords } from "../redux-store/weatherSlice";

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
const useCoords = function () {
  // const [coords, setCoords] = useState({ lat: 17.366, lon: 78.476 });
  const dispatch = useAppDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (e) {
        const { latitude: lat, longitude: lon } = e.coords;

        // setCoords({ lat, lon });

        dispatch(setCoords({ lat, lon }));
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
