import React, { useEffect, useRef, useState, useTransition } from "react";
import { HydratedRouter, useLoaderData, useNavigate } from "react-router-dom";
import styled from "./Weather.module.scss";
import {
  Orgnizer,
  Average,
  getDominantWeather,
} from "../../functions/Organize";
import GlossCard from "../../components/GlossCard/GlossCard";
// import { unix } from "dayjs";
import { useTranslation } from "react-i18next";
import LangSwitcher from "../../i18n/LangSwitcher"

const Weather = () => {
  const [Data, SetData] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();
  // const [ isPending , startTransition ] = useTransition()
  const data = useLoaderData();

  useEffect(() => {
    SetData(Average(Orgnizer(data)));
  }, [data]);

  const sequences = {
    Main: ["feels_like", "humidity", "presure", "clouds", "pop"],
    MainDay: ["feels_like", "humidity", "presure", "clouds"],
    Wind: ["speed", "deg", "gust"],
  };

  if (!Data || !Data.Weather[0].Average) return <div>Загрузка данных...</div>;
  console.log(Data);

  return (
    <main className={styled.MainContainer}>
      <div className={styled.SubMainCon}>
        <div className={styled.MainContainer_buttons}>
          <button onClick={() => window.location.replace("/")}>
          to SearchPage
          </button>
          <LangSwitcher />
        </div>
        
        <div className={styled.AboutTheCity_Con}>
          <div className={styled.AboutTheCity_Con_title}>
            {t("city.description")}
          </div>
          <div className={styled.AboutTheCity_Info_Con}>
            <div className={styled.AboutTheCity_Info}>
              <span className="Sky">{t("city.country")}: </span>
              <span className="Text">{Data.City.country}</span>
            </div>
            <div className={styled.AboutTheCity_Info}>
              <span className="Sky">{t("city.city")}: </span>
              <span className="Text">{Data.City.name}</span>
            </div>
            <div className={styled.AboutTheCity_Info}>
              <span className="Sky">{t("city.population")}: </span>
              <span className="Text">{Data.City.population}</span>
            </div>
            <div className={styled.AboutTheCity_Info}>
              <span className="Sky">{t("city.timezone")}: </span>
              <span className="Text">UTC{Data.City.timezone}</span>
            </div>
          </div>
        </div>

        <div className={styled.TodayContainer}>
          <div className={styled.NowWeather_Con}>
            <div className={styled.NowWeather_Con_title}>
              {t(`days.${Data.Weather[0].day}`)}{" "}
              {Data.Weather[0].lists[0].dt_txt.split(" ")[0]}
            </div>

            <div className={styled.NowWeather_Main}>
              <div className={styled.NowWeather_Main_Just}>
                <div className={styled.NowWeather_Main_Just_mainlyText}>
                  {t("common.mainly") +
                    " " +
                    t(
                      `conditions.${
                        getDominantWeather(Data["Weather"][0].Average.main)[1]
                      }`
                    )}{" "}
                </div>
                <img
                  className={styled.NowWeather_Main_Just_Img}
                  width={150}
                  height={150}
                  src={`http://openweathermap.org/img/w/${
                    getDominantWeather(Data["Weather"][0].Average.main)[0]
                  }.png`}
                  alt=""
                />
                <div className={styled.NowWeather_Main_Just_Degree}>
                  {Data["Weather"][0].Average.temp}
                  {"°C"}
                </div>
                <div className={styled.NowWeather_Main_Just_MaxMin}>
                  <span className="TitleText">{t("weather.min")}: </span>
                  <span className="Text">
                    {Math.floor(Data["Weather"][0].Average.temps[0])}°C
                  </span>
                  <span className="TitleText"> {t("weather.max")}: </span>
                  <span className="Text">
                    {Math.floor(Data["Weather"][0].Average.temps.slice(-1)[0])}°C
                  </span>
                </div>
              </div>
              <div className={styled.NowWeather_Main_Details}>
                {sequences.Main.map((title) => (
                  <div key={title}>
                    <span className="TitleText">{t(`weather.${title}`)}: </span>
                    <span className="Text">
                      {Data["Weather"][0].Average[title]}
                      {title === "feels_like"
                        ? "°C"
                        : title === "clouds" ||
                          title === "humidity" ||
                          title === "pop"
                        ? "%"
                        : null}
                    </span>
                  </div>
                ))}
              </div>
              <div className={styled.NowWeather_Main_Wind}>
                <div className={styled.NowWeather_Main_Wind}>
                  <span className="Sky">{t("weather.wind_details")}</span>
                  {sequences.Wind.map((title) => {
                    return (
                      <div key={title}>
                        <span className="TitleText">
                          {t(`weather.${title}`)}:{" "}
                        </span>
                        <span className="Text">
                          {Data["Weather"][0].Average[`wind_${title}`]}
                          {title === "gust" || title === "speed" ? " m/s" : "°"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styled.NowWeather_Main_SunsetInfo}>
                <div>
                  <span className="TitleText">{t("weather.sunrise")}: </span>
                  <span className="Text">{Data.City.sunrise} </span>
                </div>
                <div>
                  <span className="TitleText">{t("weather.sunset")}: </span>
                  <span className="Text">{Data.City.sunset}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styled.TodayForecast_Con}>
            {Data["Weather"][0].lists.map((Hour) => {
              return (
                <div className={styled.HourlyMain} key={Hour.dt_txt}>
                  <div className={styled.HourlyMain_Front}>
                    <div className={styled.HourlyMain_Front_Time}>
                      {Hour.dt_txt.split(" ")[1]}
                    </div>
                    <img
                      className={styled.HourlyMain_Front_Img}
                      width={50}
                      height={50}
                      src={`http://openweathermap.org/img/w/${Hour.weather[0].icon}.png`}
                      alt=""
                    />
                    <div className={styled.HourlyMain_Front_Degree}>
                      {Math.floor(Hour.main.temp)}°C
                    </div>
                  </div>
                  <div className={styled.HourlyMain_Back}>
                    <div>
                      <span className="Sky">{t("weather.min")}: </span>
                      <span className="Text">{Math.floor(Hour.main.temp_min)}°C</span>{" "}
                      <span className="Sky">{t("weather.max")}: </span>
                      <span className="Text">{Math.floor(Hour.main.temp_min)}°C</span>
                    </div>
                    <div className={styled.HourlyMain_Back_Info}>
                      <span className="Sky">{t("weather.feels_like")}: </span>
                      <span className="Text">{Hour.main.feels_like}°C</span>
                    </div>
                    <div className={styled.HourlyMain_Back_Info}>
                      <span className="Sky">{t("weather.pop")}: </span>
                      <span className="Text">{Hour.pop * 100}%</span>
                    </div>
                    <div className={styled.HourlyMain_Back_Info}>
                      <span className="Sky">{t("weather.clouds")}: </span>
                      <span className="Text">{Hour.clouds["all"]}%</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styled.DailyForecast_Con}>
          {Data["Weather"].map((day, i) => {
            if (i !== 0) {
              return (
                <div className={styled.DayMainCon} key={i}>
                  <div className={styled.DailyMain_Front}>
                    <div className={styled.DailyMain_Front_Title}>
                      {t(`days.${day.day}`)} {day.lists[0].dt_txt.split(" ")[0]}
                    </div>
                    <div className={styled.DailyMain_Front_Con}>
                      <img
                        className={styled.DailyMain_Front_Img}
                        width={70}
                        height={70}
                        src={`http://openweathermap.org/img/w/${
                          getDominantWeather(day.Average.main)[0]
                        }.png`}
                      ></img>
                      <div>
                        <div className={styled.DailyMain_Front_Degree}>
                          {Math.floor(day.Average.temp)}°C
                          <div className={styled.DailyMain_Front_MaxMin}>
                            <span className="TitleText">
                              {t("weather.min")}:{" "}
                            </span>
                            <span className="Text">
                              {Math.floor(day.Average.temps[0])}°C
                            </span>{" "}
                            <span className="TitleText">
                              {t("weather.max")}:{" "}
                            </span>
                            <span className="Text">
                              {Math.floor(day.Average.temps.slice(-1)[0])}°C
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styled.DailyMain_Back}>
                    <div className={styled.DailyMain_Back_Con1}>
                      {sequences.MainDay.map((title) => {
                        return (
                          <div key={title}>
                            <span className="TitleText">
                              {t(`weather.${title}`)}:{" "}
                            </span>
                            <span className="Text">
                              {day.Average[title]}
                              {title === "feels_like"
                                ? "°C"
                                : title === "clouds" ||
                                  title === "humidity" ||
                                  title === "pop"
                                ? "%"
                                : null}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <div className={styled.DailyMain_Back_Con2}>
                      <span className="SunRise">{t("weather.wind_details")}</span>
                      {sequences.Wind.map((title) => {
                        return (
                          <div key={title}>
                            <span className="TitleText">
                              {t(`weather.${title}`)}:{" "}
                            </span>
                            <span className="Text">
                              {day.Average[`wind_${title}`]}
                              {title === "gust" || title === "speed"
                                ? " m/s"
                                : "°"}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </main>
  );
};

export default Weather;
