import API from "./EntryPoint";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function GetCoordinates( CityName ){
    const data = await API.get(`/direct?q=${CityName}&limit=1&appid=${API_KEY}`);
    return data.data;
}

