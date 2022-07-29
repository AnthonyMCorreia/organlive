import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

import { setDocumentTitle } from "../state/ui"
import {notFound} from '../state/library'

const NotFound = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setDocumentTitle("Organlive | Not Found"))

		return () => {
			dispatch(notFound(false))
		}
	}, [dispatch])

	return (
		<div id="not-found">
			<h2 id="not-found-text">The Page You're looking for doesn't exist.</h2>
		</div>
	)
}

export default NotFound
