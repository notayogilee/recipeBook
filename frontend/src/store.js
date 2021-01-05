import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  recipeListReducer,
  recipeDetailsReducer
} from './reducers/recipeReducers'
import {
  userLoginReducer
} from './reducers/userReducers'

const reducer = combineReducers({
  userLogin: userLoginReducer,
  recipeList: recipeListReducer,
  recipeDetails: recipeDetailsReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store