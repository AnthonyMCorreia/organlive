import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

import { setDocumentTitle } from "../state/ui"

const NotFound = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setDocumentTitle("Organlive | Not Found"))
	}, [dispatch])

	return (
		<div id="not-found">
			<h2 id="not-found-text">The Page You're looking for doesn't exist.</h2>
		</div>
	)
}

export default NotFound
