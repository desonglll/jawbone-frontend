import * as React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home.tsx";

const AppRoute: React.FC = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path={"/*"} element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </>
}
export default AppRoute;