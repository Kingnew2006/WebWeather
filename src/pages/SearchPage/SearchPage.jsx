import React, { useRef, useState, useTransition } from "react";
import GlossCard from "../../components/GlossCard/GlossCard";
import Form from "../../components/SearchForm/Form";
import styled from "./SearchPage.module.scss";
import { FuncGetList } from "../../functions/GetList";
import ZoomEffect from "../../functions/ZoomEffect";
import { GetCoordinates } from "../../API/API";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SearchPage = () => {
  const [List, SetList] = useState(null);
  const [isPending, startTransition] = useTransition();
  const [Corodinates, SetCoordinates] = useState({ lat: null, lon: null });
  const { t } = useTranslation()
  const input = useRef();
  let Value = useRef("");
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = await GetCoordinates(Value.current);
      SetCoordinates({ lat: data[0].lat, lon: data[0].lon });
      if (data.length > 0) 
        Navigate(`:${data[0].lat}/:${data[0].lon}` , { replace: true});
    } catch (error) {
        alert("Такого города не существует");
        console.log(error)
    }
  };

  const HandleChange = async () => {
    Value.current = input.current?.value;

    if (Value.current?.length >= 2) {
      startTransition(async () => {
        const list = await FuncGetList(Value.current);
        if (list) SetList(list);
      });
    } else {
      SetList(null);
    }
  };

  return (
    <main className={styled.main}>
      <div className={styled.SearchPageTextArea}>
        <h1 style={{ color: "#0D47A1", fontSize: "36px" }}>
          {t("common.type")}
        </h1>
        <h3 style={{ color: "#FFECB3", fontSize: "24px" }}>
          {t("common.fast")}
        </h3>
      </div>
      <div className={styled.FormAndRecommend}>
        <Form ref={input} onChange={HandleChange} onSubmit={handleSubmit}>
          {List && (
            <ul className={styled.RecommendContainer}>
              {isPending && "...Loading"}
              {Array.isArray(List) &&
                List.map((city) => (
                  <li
                    className={styled.RecommendedCity}
                    onClick={() => {
                      if (input.current) {
                        input.current.value = city;
                        Value.current = city;
                      }
                      SetList(null);
                    }}
                    key={city}
                  >
                    {city}
                  </li>
                ))}
            </ul>
          )}
        </Form>
      </div>
    </main>
  );
};

export default SearchPage;
