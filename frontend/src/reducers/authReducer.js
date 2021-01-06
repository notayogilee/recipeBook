import {
  USER_LOADED_REQUEST,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL
} from '../constants/authConstants'

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
  user: null
}

export default authReducer = (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case USER_LOADED_REQUEST:
      return {
        ...state
      }
    case USER_LOADED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      }
    case USER_LOADED_FAIL:
      localStorage.removeItem("token")
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      }

  }
}
