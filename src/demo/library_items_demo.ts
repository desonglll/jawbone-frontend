import LibraryItemProps, {LibraryItemType} from "../models/library_item.ts";
import {v6 as uuid_v6} from "uuid";

const library_items_demo: LibraryItemProps[] = [
    {
        id: 0,
        name: "Local",
        type: LibraryItemType.Collection,
        slot: "local",
        uuid: uuid_v6()
    },
    {
        id: 1,
        name: "Liked",
        type: LibraryItemType.Collection,
        slot: "like",
        uuid: uuid_v6()
    },
    {
        id: 2,
        name: "Album One More Light",
        type: LibraryItemType.Album,
        slot: "one_more_light",
        uuid: uuid_v6()
    },
    {
        id: 3,
        name: "Playlist A Touch Of Green",
        type: LibraryItemType.Playlist,
        slot: "a_touch_of_green",
        uuid: uuid_v6()
    }
]

export default library_items_demo;