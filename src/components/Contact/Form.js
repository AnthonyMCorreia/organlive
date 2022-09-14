import { useState } from "react"
import axios from "axios"

import TexAreaAutoSize from "react-textarea-autosize"
import { validate } from "email-validator"
import { toast } from "react-hot-toast"

const Contact = () => {
	const [name, setName] = useState("")
	const [message, setMessage] = useState("")

	const [email, setEmail] = useState("")
	const [validEmail, setValidEmail] = useState(true)

	const [submitAttempt, setSubmitAttempt] = useState(false)

	const submitHandler = async (evt) => {
		evt.preventDefault()
		setSubmitAttempt(true)

		if (!email || email === "" || !validEmail) {
			setValidEmail(false)
		}

		if (name && message && email && validEmail) {
			const formContent = {
				name,
				email,
				message
			}

			const info = axios.post("api.orgalnive.com/send", formContent)

			toast.promise(info, {
				loading: "Sending...",
				success: "Message Sent!",
				error: (e) => `Something went wrong: ${e.errors[0]}`,
				icon: "🎵",
				style: {
					padding: "0.5rem"
				}
			})
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
					value={name}
				/>
				<label className="contact-label" htmlFor="name">
					{!name && submitAttempt ? (
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
					{!message && submitAttempt ? (
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
