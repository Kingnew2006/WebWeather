import React from "react";
import { GetWeather } from "../API";

const WeatherLoader = ({ params }) => {
  const { lat , lon } = params;
  const LAT = lat.slice(1)
  const LON = lon.slice(1)
  const data = GetWeather(LAT,LON);

  return data
};

export default WeatherLoader;
