import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

import { setDocumentTitle } from "../../state/ui"

// Components
import Text from "./Text"
import Form from "./Form"
import Socials from "./Socials"

const Contact = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setDocumentTitle("Organlive | Contact"))
	}, [dispatch])

	return (
		<div id="contact">
			<div id="contact-inner">
				<Text />
				<Form />
				<Socials />
			</div>
		</div>
	)
}

export default Contact
