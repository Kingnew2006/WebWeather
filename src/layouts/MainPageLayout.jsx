import { Outlet } from "react-router-dom";
import GlossCard from "../components/GlossCard/GlossCard";
import Header from "../pages/Header/Header";
import styled from "./MainPageLayout.module.scss"

export default function MainPageLayout(){
   return (
    <main className={`${styled.MainPageLayout}`}>
        <Header />
        <main>
            <Outlet />
        </main>
    </main>
   ) 
}
