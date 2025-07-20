import "./i18n/index";
import GlossCard from "./components/GlossCard/GlossCard";
import {
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  useParams,
} from "react-router-dom";
import MainPageLayout from "./layouts/MainPageLayout";
import SearchPage from "./pages/SearchPage/SearchPage";
import Weather from "./pages/Weather/Weather";
import WeatherLoader from "./API/Loaders/WeatherLoader";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainPageLayout />}>
        <Route index element={<SearchPage />} />
        <Route
          path=":lat/:lon"
          element={<Weather key={useParams().lat} />}
          loader={WeatherLoader}
          shouldRevalidate={() => true}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
