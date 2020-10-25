import { applyMiddleware, combineReducers, createStore } from 'redux'
import galleryReducer from './gallery-reducer'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import { compose } from 'redux'

let rootReducer = combineReducers({
    gallery: galleryReducer,
    form: formReducer
})

type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store



