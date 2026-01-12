import axios from "axios"



const API_COR = axios.create({
  baseURL: `https://api.openweathermap.org/geo/1.0/`,
})

const API_GET_WEATHER = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5`
})

export { API_COR ,API_GET_WEATHER };

