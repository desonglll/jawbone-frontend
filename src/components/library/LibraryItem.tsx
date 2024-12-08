import ListItem from '@mui/material/ListItem';
import {ListItemButton, ListItemText} from "@mui/material";
import LibraryItemProps from "../../models/library_item.ts";
import * as React from "react";
import {useNavigate} from "react-router-dom";

const LibraryItem: React.FC<{ item: LibraryItemProps }> = ({item}) => {
    const navigate = useNavigate();
    const onClick = () => {
        console.log(`Clicked ${item.slot}`);
        if (item.slot === "like") {
            navigate(`/${item.type}/track`);
        } else if (item.slot === "local") {
            navigate(`/${item.type}/local`);
        } else {
            navigate(`/${item.type}/${item.uuid}`);
        }
    }
    return (
        <div>
            <ListItemButton onClick={onClick}>
                <ListItem>
                    <ListItemText primary={item.name}/>
                </ListItem>
            </ListItemButton>
        </div>
    );
};

export default LibraryItem;