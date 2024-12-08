import Library from "../components/library/Library.tsx";
import Content from "./content/Content.tsx";
import library_items_demo from "../demo/library_items_demo.ts";
import "./Home.scss"
import NowPlayingBar from "../components/playing_bar/NowPlayingBar.tsx";
import {TrackProvider} from "../context/TrackContext.tsx";

const Home = () => {
    return (
        <TrackProvider>
            <div className={"container"}>
                <div className={"header"}>
                    header
                </div>
                <div className={"main-view-container"}>
                    <div className={"library"}>
                        <Library libraryItems={library_items_demo}/>
                    </div>
                    <div className={"content"}>
                        <Content/>
                    </div>
                </div>
                <div className={"footer"}>
                    <NowPlayingBar/>
                </div>
            </div>
        </TrackProvider>
    );
};

export default Home;