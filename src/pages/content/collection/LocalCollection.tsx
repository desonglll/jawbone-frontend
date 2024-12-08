import {useEffect, useState} from "react";
import axios from "axios";
import TrackItemProps from "../../../models/track_item.ts";
import Track from "../../../components/track/Track.tsx";

const LocalCollection = () => {
    const [trackList, setTrackList] = useState<TrackItemProps[]>([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchLocalTrackData = () => {
            axios.get('http://localhost:8888/audio_list').then((resp) => {
                if (resp.status == 200) {
                    setTrackList(resp.data);
                    setLoading(false);
                }
            })
        }
        fetchLocalTrackData()
    }, []);
    return (
        !loading && (<>
            <Track trackList={trackList}/>
        </>)
    )
}

export default LocalCollection;