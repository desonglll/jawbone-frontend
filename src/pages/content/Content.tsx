import {Route, Routes} from "react-router-dom";
import ContentRoutes from "../../routes/content.tsx";

const Content = () => {
    return (
        <Routes>
            <Route path={"/collection/*"} element={<ContentRoutes/>}/>
        </Routes>
    );
};

export default Content;