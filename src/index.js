import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import { BrowserRouter as Router } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"

// State
import store from "./state"
import { Provider } from "react-redux"

// History
import history from "./history"

// Styles
import "./style/index.scss"

ReactDOM.render(
	<React.StrictMode crossOrigin>
		<Provider store={store}>
			<Router history={history}>
				<HelmetProvider>
					<App />
				</HelmetProvider>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)
