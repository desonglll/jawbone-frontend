import React from 'react';
import TrackItemProps from "../../models/track_item.ts";
import TrackItem from "./TrackItem.tsx";
import {List} from "@mui/material";

const Track: React.FC<{ trackList: TrackItemProps[] }> = ({trackList}) => {
    return (
        <div>
            <List>
                {trackList.map((track) => (
                    <TrackItem trackItem={track} key={track.uuid}/>
                ))}
            </List>
        </div>
    );
};

export default Track;