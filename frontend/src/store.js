import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  recipeListReducer,
  recipeDetailsReducer
} from './reducers/recipeReducers'
import {
  userLoginReducer,
  userRegisterReducer,
  userRecipeListReducer
} from './reducers/userReducers'

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  recipeList: recipeListReducer,
  recipeDetails: recipeDetailsReducer,
  myRecipes: userRecipeListReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = { userLogin: { userInfo: userInfoFromStorage } }

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store