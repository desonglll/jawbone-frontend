import React from 'react';
import TrackItemProps from "../../models/track_item.ts";
import {ListItemButton} from "@mui/material";
import axios from "axios";
import {useTrack} from "../../context/TrackContext.tsx";

const TrackItem: React.FC<{ trackItem: TrackItemProps }> = ({trackItem}) => {
    const {setTrackSrc} = useTrack();
    const fetchTrackStream = async () => {
        const resp = await axios.get(trackItem.stream, {responseType: "arraybuffer"})
        const trackBlob = new Blob([resp.data], {type: resp.headers["Content-Type"] as string});
        const trackUrl = URL.createObjectURL(trackBlob);
        setTrackSrc(trackUrl)
    }
    return (
        <div>
            <ListItemButton onClick={fetchTrackStream}>
                {trackItem.name}
            </ListItemButton>
        </div>
    );
};

export default TrackItem;