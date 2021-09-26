import { createStore, combineReducers, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

//reducers
import radio from "./radio"
import library from "./library"
import search from "./search"
import ui from "./ui"

const reducer = combineReducers({
	radio,
	library,
	search,
	ui
})

const middleware = composeWithDevTools(
	applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)
//redux logger
//

const store = createStore(reducer, middleware)

export default store
