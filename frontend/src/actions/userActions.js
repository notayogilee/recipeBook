import axios from 'axios'
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT
} from '../constants/userContants'

export const register = (firstName, lastName, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST
    })

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    const { data } = await axios.post('/api/users', { firstName, lastName, email, password }, config)

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data
    })
    const { token, user } = data

    // set to localstorage without password
    localStorage.setItem('userInfo', JSON.stringify({
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        recipes: user.recipes
      }, token
    }))

  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message : error.message
    })
  }
}

export const login = (email, password) => async (dispatch) => {

  try {
    dispatch({
      type: USER_LOGIN_REQUEST
    })

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    const { data } = await axios.post('/api/users/login', { email, password }, config)

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message : error.message
    })
  }
}

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo")
  dispatch({
    type: USER_LOGOUT,
    payload: null
  })
}