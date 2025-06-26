import axios from "axios"



const API = axios.create({
  baseURL: `http://api.openweathermap.org/geo/1.0/`,
})

export default API;

