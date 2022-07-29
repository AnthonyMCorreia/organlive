import { createStore, combineReducers, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

//reducers
import radio from "./radio"
import library from "./library"
import ui from "./ui"
import search from "./search"

const reducer = combineReducers({
	radio,
	library,
	ui,
	search
})

const middleware =
	process.env.NODE_ENV === "development"
		? composeWithDevTools(
				applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
		  )
		: composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(reducer, middleware)

export default store
