export enum LibraryItemType {
    Collection = 'collection',
    Playlist = 'playlist',
    Album = 'album',
    Artist = 'artist'
}

interface LibraryItemProps {
    name: string,
    type: LibraryItemType,
    slot: string,
    uuid: string,
}

export default LibraryItemProps;