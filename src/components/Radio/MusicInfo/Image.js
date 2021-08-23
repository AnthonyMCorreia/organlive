import React from "react"
import {useSelector} from "react-redux"
import { useImage } from "react-image"

const Image = () => {
	const imageName = useSelector((state) => state.radio.song.album.picture)
	
	const { src } = useImage({
		srcList: "https://pictures.organlive.com/" + imageName
	})

	return <img src={src} alt="album" />
}

export default useImage
