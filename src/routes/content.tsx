import {Route, Routes} from "react-router-dom";
import Collection from "../pages/content/collection/Collection.tsx";
import * as React from "react";
import LikeCollection from "../pages/content/collection/LikeCollection.tsx";
import LocalCollection from "../pages/content/collection/LocalCollection.tsx";

const ContentRoutes: React.FC = () => {
        return (
            <Routes>
                <Route path={""} element={<Collection/>}/>
                <Route path={"like"} element={<LikeCollection/>}/>
                <Route path={"local"} element={<LocalCollection/>}/>
            </Routes>
        );
    }
;

export default ContentRoutes;