import { API_COR , API_GET_WEATHER } from "./EntryPoint";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function GetCoordinates( CityName ){
    const data = await API_COR.get(`/direct?q=${CityName}&limit=1&appid=${API_KEY}`);
    return data.data;
}

export async function GetWeather( lat , lon ) {
    const data = await API_GET_WEATHER.get(`/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    return data.data;
}

