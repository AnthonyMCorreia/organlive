import React, { useState } from "react"

import TexAreaAutoSize from "react-textarea-autosize"
import { validate } from "email-validator"

const Contact = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")

	const [validEmail, setValidEmail] = useState(true)
	const [submitAttempt, setSubmitAttempt] = useState(false)

	const submitHandler = (evt) => {
		evt.preventDefault()
		setSubmitAttempt(true)

		if (!email || email === "" || !validEmail) {
			setValidEmail(false)
		}

		if (
			name !== "" &&
			name &&
			name !== "" &&
			name &&
			email !== "" &&
			email &&
			validEmail
		) {
			const formContent = {
				name,
				email,
				message
			}
		}
	}

	const changeHandler = (elm) => {
		elm.preventDefault()

		const dictionary = {
			email: setEmail,
			name: setName,
			message: setMessage
		}

		const text = elm.target.value
		const name = elm.target.name

		if (name === "email" && submitAttempt) {
			const isEmail = validate(text)

			setValidEmail(isEmail)
		}

		dictionary[name](text)
	}

	const blurValidation = (elm) => {
		elm.preventDefault()
		const value = elm.target.value

		const isEmail = validate(value)

		if (!isEmail) {
			setValidEmail(false)
		} else if (isEmail) {
			setValidEmail(true)
		}
	}

	return (
		<form onSubmit={submitHandler} id="contact-form">
			<div className="contact-form-container">
				<input
					type="text"
					name="name"
					className="contact-form-input"
					onChange={changeHandler}
					required
					autoComplete="off"
					value={name}
				/>
				<label className="contact-label" htmlFor="name">
					{name === "" && !name && submitAttempt ? (
						<span className="contact-input-error">Please Enter Your Name</span>
					) : null}
					<span className="label-content">Name</span>
				</label>
			</div>
			<div className="contact-form-container">
				<input
					type="text"
					name="email"
					className="contact-form-input"
					onChange={changeHandler}
					required
					autoComplete="off"
					onBlur={blurValidation}
					value={email}
				/>
				<label className="contact-label" htmlFor="email">
					{!validEmail && submitAttempt ? (
						<span className="contact-input-error">Please Enter Your Email</span>
					) : null}
					<span className="label-content">Email</span>
				</label>
			</div>
			<div id="contact-message-container">
				<TexAreaAutoSize
					type="text"
					name="message"
					id="contact-textarea"
					onChange={changeHandler}
					required
					autoComplete="off"
					minRows="10"
					value={message}
				/>
				<label id="contact-message-label" htmlFor="message">
					{!message && message === "" && submitAttempt ? (
						<span className="contact-input-error">Please Enter A Message</span>
					) : null}
					<span id="contact-message-content">Message</span>
				</label>
			</div>
			<button onClick={submitHandler} id="contact-submit-bttn">
				Submit
			</button>
		</form>
	)
}

export default Contact
