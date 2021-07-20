import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_RECIPE_LIST_REQUEST,
  USER_RECIPE_LIST_SUCCESS,
  USER_RECIPE_LIST_FAIL,
  USER_RECIPE_REMOVE_REQUEST,
  USER_RECIPE_REMOVE_SUCCESS,
  USER_RECIPE_REMOVE_FAIL,
  USER_RECIPE_ADD_REQUEST,
  USER_RECIPE_ADD_SUCCESS,
  USER_RECIPE_ADD_FAIL
} from '../constants/userContants'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return { userInfo: action.payload }
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true }
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userRecipeListReducer = (state = { recipes: [] }, action) => {
  switch (action.type) {
    case USER_RECIPE_LIST_REQUEST:
      return { loading: true }
    case USER_RECIPE_LIST_SUCCESS:
      return { loading: false, recipes: action.payload }
    case USER_RECIPE_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userRecipeRemoveReducer = (state = { recipes: [] }, action) => {
  switch (action.type) {
    case USER_RECIPE_REMOVE_REQUEST:
      return { loading: true }
    case USER_RECIPE_REMOVE_SUCCESS:
      return { loading: false, recipes: action.payload }
    case USER_RECIPE_REMOVE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userRecipeAddReducer = (state = { recipes: [] }, action) => {
  switch (action.type) {
    case USER_RECIPE_ADD_REQUEST:
      return { loading: true }
    case USER_RECIPE_ADD_SUCCESS:
      return { loading: false, recipes: action.payload }
    case USER_RECIPE_ADD_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}