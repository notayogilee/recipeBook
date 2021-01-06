import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT
} from '../constants/userContants'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true, isAuthenticated: false }
    case USER_LOGIN_SUCCESS:
      return { loading: false, isAuthenticated: true, userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { loading: false, isAuthenticated: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}