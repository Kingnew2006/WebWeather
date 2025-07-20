import React from "react";
import GlossCard from "../../components/GlossCard/GlossCard";
import styled from "./Header.module.scss";
import LangSwitcher from "../../i18n/LangSwitcher"

const Header = () => {
  return (
    <header>
      <div className={styled.HeaderMainCon}>
        <GlossCard className={styled.HeaderGloss} width="1920px">
          <img src="/public/main/MainLogo.svg" alt="" />
        </GlossCard>
      </div>
    </header>
  );
};

export default Header;
