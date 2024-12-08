import LibraryItem from "./LibraryItem.tsx";
import {List} from "@mui/material";
import * as React from "react";
import LibraryItemProps from "../../models/library_item.ts";


const Library: React.FC<{ libraryItems: LibraryItemProps[] }> = ({libraryItems}) => {
    return (
        <div>
            <List>
                {libraryItems.map((item) => (
                    <LibraryItem key={item.uuid} item={item}/>
                ))}
            </List>
        </div>
    );
};

export default Library;