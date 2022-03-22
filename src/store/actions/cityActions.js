import axios from "axios";
import { API_KEY } from "../../config/env";

export function fetchCity(city_name) {
  return (dispatch) => {
    dispatch({
      type: "FETCH_CITY",
      city:city_name,
      payload: axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&APPID=${API_KEY}`
        ),
      })
  };
}

