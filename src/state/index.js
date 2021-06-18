import { createStore, combineReducers, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

//reducers
import player from "./player"
import library from "./library"
import search from "./search"
import menu from "./dropdown"

const reducer = combineReducers({
	player,
	library,
	search,
	menu
})

const middleware = composeWithDevTools(
	applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)

const store = createStore(reducer, middleware)

export default store
