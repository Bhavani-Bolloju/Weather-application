import useSWR from "swr";
import useCoords from "./useCoords";

// interface FetchProps {
//   link: string;
// }

// export const API_key = "659e7c6ad40da6278db92ac986ebe09b";

export const API_key = "363c423f8d11223f86fa7bd54b3f93b9";
const baseURL = "https://api.openweathermap.org/data/2.5/";

const fetcher = async function (url: string) {
  const req = await fetch(url);
  const res = await req.json();
  return res;
};

const useFetch = function (url: string, exclude: string = "") {
  const { lat, lng } = useCoords();
  const link = `${baseURL}${url}?lat=${lat}&lon=${lng}&appid=${API_key}&units=metric${exclude}`;
  // console.log(link, "link");

  const { data, error, isLoading } = useSWR(link, fetcher);

  return { data, error, isLoading };
};

export default useFetch;

/*
https://api.openweathermap.org/data/2.5/
weather?lat={lat}&lon={lon}&appid={API key}
*/
