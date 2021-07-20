import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  recipeListReducer,
  recipeDetailsReducer
} from './reducers/recipeReducers'
import {
  userLoginReducer,
  userRegisterReducer
} from './reducers/userReducers'
import { myRecipeListReducer } from './reducers/myRecipesReducers'

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  recipeList: recipeListReducer,
  recipeDetails: recipeDetailsReducer,
  myRecipes: myRecipeListReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const userRecipesFromStorage = localStorage.getItem('myRecipes') ? JSON.parse(localStorage.getItem('myRecipes')) : []

const initialState = { userLogin: { userInfo: userInfoFromStorage }, userRecipes: { userRecipesFromStorage } }

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store