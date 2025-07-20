import React, { forwardRef } from "react";
import styled from "./Form.module.scss";
import GlossCard from "../GlossCard/GlossCard";
import { useTranslation } from "react-i18next";

const Form = forwardRef(({ onChange , onSubmit , children }, ref) => {
  const { t } = useTranslation()
  return (
    <div className={styled.FormMainContainer}>
      <GlossCard
        width="600px"
        className={styled.SearchPageGloss}
        heigth="220px"
      >
        <form onSubmit={onSubmit} className={styled.SearchPageForm}>
          <div className={styled.InputContainer}>
            <input
              type="text"
              className={styled.Input}
              ref={ref}
              name="city"
              required
              onChange={onChange}
            />
            {children}
          </div>

          <button className={styled.FormButton} type="submit">{t("common.search")}</button>
        </form>
        
      </GlossCard>
    </div>
  );
});

export default Form;
