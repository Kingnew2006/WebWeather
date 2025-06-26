import GlossCard from "./components/GlossCard/GlossCard";
import { RouterProvider , Route , createRoutesFromElements , createBrowserRouter } from "react-router-dom"
import MainPageLayout from "./layouts/MainPageLayout";



export default function App(){
    const router = createBrowserRouter(createRoutesFromElements( 
        <Route path="/" element={<MainPageLayout />}>
            
        </Route> 
    )) 

    return ( <RouterProvider router={router} />)
}
 



 

  
 

 
