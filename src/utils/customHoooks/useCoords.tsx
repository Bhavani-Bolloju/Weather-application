import { useEffect, useState } from "react";
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
const useCoords = function () {
  const [coords, setCoords] = useState({ lat: 17.366, lon: 78.476 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (e) {
        const { latitude: lat, longitude: lon } = e.coords;

        setCoords({ lat, lon });
      },
      function (err) {
        alert(`${err}`);
      },
      options
    );
  }, []);

  return coords;
};

export default useCoords;
