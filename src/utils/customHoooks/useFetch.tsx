import useSWR from "swr";
import useCoords from "./useCoords";

// interface FetchProps {
//   link: string;
// }

export const API_key = "17e597852bb6a1362851eabe2ab72680";
const baseURL = "https://api.openweathermap.org/data/2.5/";

const fetcher = async function (url: string) {
  const req = await fetch(url);
  const res = await req.json();
  return res;
};

const useFetch = function (url: string) {
  const { lat, lon } = useCoords();
  const link = `${baseURL}${url}?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;

  const { data, error, isLoading } = useSWR(link, fetcher);

  return { data, error, isLoading };
};

export default useFetch;

/*
https://api.openweathermap.org/data/2.5/



weather?lat={lat}&lon={lon}&appid={API key}
*/
