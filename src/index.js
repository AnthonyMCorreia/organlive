import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import reportWebVitals from "./reportWebVitals"
import store from "./state"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

// History
import history from "./history"

// Styles
import "./style/index.scss"

ReactDOM.render(
	<React.StrictMode crossOrigin>
		<Provider store={store}>
			<Router history={history}>
				<App />
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
