import { createStore, combineReducers, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

//reducers
import radio from "./radio"
import library from "./library"
import search from "./search"
import menu from "./dropdown"

const reducer = combineReducers({
	radio,
	library,
	search,
	menu
})

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware))
//redux logger
// , createLogger({ collapsed: true })

const store = createStore(reducer, middleware)

export default store
