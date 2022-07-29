import { useState, useRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { setError, getSearch } from "../../../state/search"
import { toggleSearch } from "../../../state/ui"

export default function SearchForm() {
	const dispatch = useDispatch()

	const navigate = useNavigate()

	const inputLabelRef = useRef(null)

	const { error, results } = useSelector((state) => state.search)

	const [text, setText] = useState("")
	const [sort, setSort] = useState("a-z")
	const [type, setType] = useState("album")

	const submitHandler = (e) => {
		e.preventDefault()
		if (text.length < 1) {
			dispatch(setError("Text is required"))
			return
		} else if (text.length > 0) {
			dispatch(setError(""))
		}

		dispatch(getSearch(type, text, sort))
		navigate(`/library/search?text=${text}&sort=${sort}&type=${type}`)
	}

	const inputChange = (elm) => {
		elm.preventDefault()

		const value = elm.target.value
		const label = inputLabelRef.current

		if (value === "") {
			label.style.opacity = "1"
		} else if (value !== "") {
			label.style.opacity = "0"
		}

		setText(elm.target.value)
	}

	useEffect(() => {
		document.getElementsByTagName("html")[0].style.overflow = "hidden"

		dispatch(setError(""))

		return () => {
			document.getElementsByTagName("html")[0].style.overflow = "auto"
		}
	}, [])

	useEffect(() => {
		return () => {
			dispatch(toggleSearch(false))
		}
	}, [dispatch])

	return (
		<div className="search-form-cont">
			<div className="search-form-inner">
				<span
					className="material-icons search-x"
					onClick={() => dispatch(toggleSearch(false))}>
					close
				</span>
				<h3 className="searchFormTitle">Search Our Library</h3>
				<form onSubmit={submitHandler} className="search-form">
					<div className="searchInputLabelContainer">
						<input
							type="text"
							id="searchInput"
							className="searchInputWidth"
							name="searchInput"
							value={text}
							onChange={inputChange}
						/>
						<label
							id="searchInputLabel"
							ref={inputLabelRef}
							htmlFor="searchInput">
							Search
						</label>
					</div>
					<div className="labelSelectArrowCont">
						<label htmlFor="searchSelect" className="selectSearchLabel">
							Type
						</label>
						<div className="selectArrowCont selectArrowContWidth">
							<select
								name="lists"
								className="searchSelect searchSelectWidth"
								onChange={(e) => setType(e.target.value)}>
								<option value="albums">Albums</option>
								<option value="organists">Organists</option>
								<option value="composers">Composers</option>
							</select>
							<span className="material-icons selectArrowDown">
								expand_more
							</span>
						</div>
					</div>
					<div className="labelSelectArrowCont">
						<label htmlFor="searchSelect" className="selectSearchLabel">
							Order By
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
								{type === "albums" ? (
									<>
										<option value="rating" className="sort-options">
											Rating
										</option>
									</>
								) : null}
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
