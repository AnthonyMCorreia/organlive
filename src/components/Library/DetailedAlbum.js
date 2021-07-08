import React from "react"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"

const DetailedAlbum = (item) => {
	const history = useHistory()
	const { selectedItem } = useSelector((state) => state.library)

	return <div id="DetailedAlbum">{selectedItem.json()}</div>
}

export default DetailedAlbum
