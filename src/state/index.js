import { createStore, combineReducers, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
// import { createLogger } from "redux-logger"

//reducers
import radio from "./radio"
import library from "./library"
import ui from "./ui"
import search from "./search"
import continuousTimer from "./radioContinuousTimer"

const reducer = combineReducers({
	radio,
	library,
	ui,
	search,
	continuousTimer
})

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(reducer, middleware)

export default store
