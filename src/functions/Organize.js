import dayjs from "dayjs";

export const Orgnizer = (MainData) => {
  let Lists = MainData.list;
  let OrgnizedObject = { City: MainData.city, Weather: [] };

  OrgnizedObject["City"].sunrise = dayjs
    .unix(OrgnizedObject["City"].sunrise)
    .format("h:mm A");
  OrgnizedObject["City"].sunset = dayjs
    .unix(OrgnizedObject["City"].sunset)
    .format("h:mm A");
  OrgnizedObject["City"].timezone = dayjs
    .unix(OrgnizedObject["City"].timezone)
    .format("Z");

  let Days = [];
  for (let x = 0; x < Lists.length; x++) {
    const dayDate = dayjs.unix(Lists[x].dt).format("dddd YYYY-MM-DD");
    if (!Days.includes(dayDate)) Days.push(dayDate);
  }
  for (let i = 0; i < Days.length; i++) {
    OrgnizedObject["Weather"].push({
      day: Days[i].split(" ")[0],
      date: Days[i].split(" ")[1],
      lists: Lists.filter(
        (item) => item.dt_txt.split(" ")[0] === Days[i].split(" ")[1]
      ),
    });
  }

  return OrgnizedObject;
};

let main_data = [];

export function getDominantWeather(mainList) {
  if (mainList === null) return null;
  const count = {};

  for (let item of mainList) {
    count[item] = (count[item] || 0) + 1;
  }

  let maxCount = 0;
  let dominant = null;

  for (let key in count) {
    if (count[key] > maxCount) {
      maxCount = count[key];
      dominant = key;
    }
  }

  const weatherIcons = {
    Thunderstorm: "11d",
    Drizzle: "09d",
    Rain: "10d",
    Snow: "13d",
    Mist: "50d",
    Smoke: "50d",
    Haze: "50d",
    Dust: "50d",
    Fog: "50d",
    Sand: "50d",
    Ash: "50d",
    Squall: "50d",
    Tornado: "50d",
    Clear: "01d",
    Clouds: "03d",
  };

  return [weatherIcons[dominant] , dominant ];
}

export const Average = (MainData) => {
  for (let x = 0; x < MainData.Weather.length; x++) {
    let AllData = {
      temp: [],
      temps: [],
      humidity: [],
      pop: [],
      clouds: [],
      feels_like: [],
      presure: [],
      wind_deg: [],
      wind_speed: [],
      wind_gust: [],
      main: [],
    };
    MainData.Weather[x]["lists"].forEach((day) => {
      AllData["temp"].push(day.main.temp);
      AllData["temps"].push(day.main.temp);
      AllData["feels_like"].push(day.main.feels_like);
      AllData["humidity"].push(day.main.humidity);
      AllData["presure"].push(day.main.pressure);
      AllData["wind_speed"].push(day.wind.speed);
      AllData["wind_deg"].push(day.wind.deg);
      AllData["wind_gust"].push(day.wind.gust);
      AllData["pop"].push(day.pop * 100);
      AllData["clouds"].push(day.clouds["all"]);
      AllData["main"].push(day.weather[0].main);
    });

    Object.keys(AllData).forEach((sectionName) => {
      const sorted = AllData[sectionName].sort((a, b) => a - b);
      if (sectionName !== "temps" && sectionName !== "main") {
        const average = AllData[sectionName][Math.floor(sorted.length / 2)];
        AllData[sectionName] = average;
      }
    });

    main_data.push(AllData);
  }

  const AverageData = { ...MainData };
  for (let x = 0; x < AverageData.Weather.length; x++) {
    AverageData.Weather[x]["Average"] = main_data[x];
  }

  return AverageData;
};
