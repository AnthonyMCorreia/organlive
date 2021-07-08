import React from 'react';
import { useSelector } from "react-redux"

const MusicInfo = (params) => {
    const song = useSelector(state => state.radio.song)
    return (
        <div id="music-info">
        {song.album ? (
            <img
                src={"https://pictures.organlive.com/" + song.album.picture}
                className="player-pic"
                alt={song.album.title}></img>
        ) : null}
    </div>

    )
}

export default MusicInfo