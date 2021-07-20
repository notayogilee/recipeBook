import axios from 'axios'
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
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

export const userListRecipes = () => async (dispatch, getState) => {
  try {
    let userInfo = {}
    const { userLogin, userRegister } = getState()

    if (!userLogin.userInfo) {
      userInfo = userRegister.userInfo
    } else {
      userInfo = userLogin.userInfo
    }

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    dispatch({ type: USER_RECIPE_LIST_REQUEST })

    const { data } = await axios.get('/api/users/myRecipes', config)

    dispatch({
      type: USER_RECIPE_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: USER_RECIPE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const userListRemoveRecipe = (id) => async (dispatch, getState) => {
  try {
    let userInfo = {}
    const { userLogin, userRegister } = getState()
    const localStorageUser = JSON.parse(localStorage.getItem('userInfo'))

    if (!userLogin.userInfo) {
      userInfo = userRegister.userInfo
    } else {
      userInfo = userLogin.userInfo
    }

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    dispatch({ type: USER_RECIPE_REMOVE_REQUEST })

    const { data } = await axios.delete(`/api/users/myRecipes/${id}`, config)

    dispatch({
      type: USER_RECIPE_REMOVE_SUCCESS,
      payload: data
    })

    localStorageUser.user.recipes = data
    localStorage.setItem('userInfo', JSON.stringify(localStorageUser))

  } catch (error) {
    dispatch({
      type: USER_RECIPE_REMOVE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const userListAddRecipe = (id) => async (dispatch, getState) => {
  try {
    let userInfo = {}
    const { userLogin, userRegister } = getState()
    const localStorageUser = JSON.parse(localStorage.getItem('userInfo'))

    if (!userLogin.userInfo) {
      userInfo = userRegister.userInfo
    } else {
      userInfo = userLogin.userInfo
    }

    const config = {

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`
      },
      id
    }

    dispatch({ type: USER_RECIPE_ADD_REQUEST })

    const { data } = await axios.put(`/api/users/myRecipes`, { id }, config)

    dispatch({
      type: USER_RECIPE_ADD_SUCCESS,
      payload: data.recipes
    })

    localStorageUser.user.recipes = data.recipes
    localStorage.setItem('userInfo', JSON.stringify(localStorageUser))

  } catch (error) {
    dispatch({
      type: USER_RECIPE_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}