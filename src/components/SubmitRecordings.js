import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { setDocumentTitle } from "../state/ui"

const SubmitRecordings = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setDocumentTitle("Organlive | Submit Recordings"))
	}, [dispatch])

	return (
		<div id="submit-recordings">
			<div id="submit-recordings-inner">
				<p id="submit-recordings-info">
					If you would like to have your recordings included in our broadcast,
					please send them to:
				</p>
				<p id="submit-recordings-addrs">
					Organ Media Foundation 6622 Michigan Avenue St. Louis, MO 63111
				</p>
			</div>
		</div>
	)
}

export default SubmitRecordings
