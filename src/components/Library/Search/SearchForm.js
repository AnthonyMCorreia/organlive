import { useRef, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { setError } from "../../../state/search"
import { toggleSearch } from "../../../state/ui"

export default function SearchForm() {
	const dispatch = useDispatch()

	const [titleText, setTitleText] = useState("")
	const titleRef = useRef(null)

	const [organistText, setOrganistText] = useState("")
	const organistRef = useRef(null)

	const [composerText, setComposerText] = useState("")
	const composerRef = useRef(null)

	const [albumText, setAlbumText] = useState("")
	const albumRef = useRef(null)

	const [sort, setSort] = useState("a-z")

	const navigate = useNavigate()

	const { error, results } = useSelector((state) => state.search)

	const submitHandler = (e) => {
		e.preventDefault()
		if (!titleText && !organistText && !composerText && !albumText) {
			dispatch(setError("Text is required"))
			return
		} else if (titleText && organistText && composerText && albumText) {
			dispatch(setError(""))
		}

		let params

		if (titleText) {
			if (!params) {
				params = `title=${titleText}`
			} else {
				params += `&title=${titleText}`
			}
		}

		if (organistText) {
			if (!params) {
				params = `organist=${organistText}`
			} else {
				params += `&organist=${organistText}`
			}
		}

		if (composerText) {
			if (!params) {
				params = `composer=${composerText}`
			} else {
				params += `&composer=${composerText}`
			}
		}

		if (albumText) {
			if (!params) {
				params = `album=${albumText}`
			} else {
				params += `&album=${albumText}`
			}
		}

		navigate(`/library/search?${params}&sort=${sort}`)
	}

	const inputChange = (elm, func, ref) => {
		elm.preventDefault()

		const value = elm.target.value
		const label = ref.current

		if (value === "") {
			label.style.opacity = "1"
		} else if (value !== "") {
			label.style.opacity = "0"
		}

		func(elm.target.value)
	}

	useEffect(() => {
		dispatch(setError(""))

		return () => {
			// Reset search form
			setTitleText("")
			setOrganistText("")
			setComposerText("")
			setAlbumText("")
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		return () => {
			dispatch(toggleSearch(false))
		}
	}, [dispatch])

	return (
		<div className="search-form-cont">
			<div className="search-form-inner">
				<h3 className="searchFormTitle">Search Our Library</h3>
				<form onSubmit={submitHandler} className="search-form">
					<div className="searchFormInputsCont">
						<div className="searchInputLabelContainer">
							<input
								type="text"
								id="searchInput"
								className="searchInputWidth"
								name="searchInput"
								value={titleText}
								onChange={(e) => inputChange(e, setTitleText, titleRef)}
							/>
							<label id="searchInputLabel" ref={titleRef} htmlFor="searchInput">
								Title
							</label>
						</div>
						<div className="searchInputLabelContainer">
							<input
								type="text"
								id="searchInput"
								className="searchInputWidth"
								name="searchInput"
								value={organistText}
								onChange={(e) => inputChange(e, setOrganistText, organistRef)}
							/>
							<label
								id="searchInputLabel"
								ref={organistRef}
								htmlFor="searchInput">
								Organist
							</label>
						</div>
						<div className="searchInputLabelContainer">
							<input
								type="text"
								id="searchInput"
								className="searchInputWidth"
								name="searchInput"
								value={composerText}
								onChange={(e) => inputChange(e, setComposerText, composerRef)}
							/>
							<label
								id="searchInputLabel"
								ref={composerRef}
								htmlFor="searchInput">
								Composer
							</label>
						</div>
						<div className="searchInputLabelContainer">
							<input
								type="text"
								id="searchInput"
								className="searchInputWidth"
								name="searchInput"
								value={albumText}
								onChange={(e) => inputChange(e, setAlbumText, albumRef)}
							/>
							<label id="searchInputLabel" ref={albumRef} htmlFor="searchInput">
								Album
							</label>
						</div>
					</div>
					<div className="labelSelectArrowCont">
						<label htmlFor="searchSelect" className="selectSearchLabel">
							Order
						</label>
						<div className="selectArrowCont selectArrowContWidth">
							<select
								className="searchSelect searchSelectWidth"
								onChange={(e) => setSort(e.target.value)}>
								<option value="a-z" className="sort-options">
									Name: A-Z
								</option>
								<option value="z-a" className="sort-options">
									Name: Z-A
								</option>
								<option value="rating" className="sort-options">
									Rating
								</option>
							</select>
							<span className="material-icons selectArrowDown">
								expand_more
							</span>
						</div>
					</div>
					<div className="searchBttnMessage">
						<button onClick={submitHandler} className="searchButton">
							Search
						</button>
						<span className={results ? "searchError" : "searchError noResults"}>
							{error}
						</span>
					</div>
				</form>
			</div>
		</div>
	)
}
