import axios from 'axios'
import {
  MY_RECIPE_LIST,
  MY_RECIPE_LIST_ADD,
  MY_RECIPE_LIST_REMOVE,
  MY_RECIPE_LIST_REQUEST,
  MY_RECIPE_LIST_FAIL
} from '../constants/myRecipeConstants'

export const myRecipeList = () => async (dispatch, getState) => {
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

    dispatch({ type: MY_RECIPE_LIST_REQUEST })

    const { data } = await axios.get('/api/users/myRecipes', config)

    dispatch({
      type: MY_RECIPE_LIST,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: MY_RECIPE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const myRecipeListRemoveRecipe = (id) => async (dispatch, getState) => {
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

    dispatch({ type: MY_RECIPE_LIST_REQUEST })

    const { data } = await axios.delete(`/api/users/myRecipes/${id}`, config)
    console.log(data)
    dispatch({
      type: MY_RECIPE_LIST_REMOVE,
      payload: data
    })

    localStorageUser.user.recipes = data
    localStorage.setItem('userInfo', JSON.stringify(localStorageUser))

    const updatedList = await axios.get('/api/users/myRecipes', config)

    dispatch({
      type: MY_RECIPE_LIST,
      payload: updatedList.data
    })

    localStorage.setItem('myRecipes', JSON.stringify(updatedList.data))

  } catch (error) {
    dispatch({
      type: MY_RECIPE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const myRecipeListAddRecipe = (id) => async (dispatch, getState) => {
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
        // "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`
      },
      id
    }

    dispatch({ type: MY_RECIPE_LIST_REQUEST })

    const { data } = await axios.put(`/api/users/myRecipes`, { id }, config)

    dispatch({
      type: MY_RECIPE_LIST_ADD,
      payload: data.recipes
    })

    localStorageUser.user.recipes = data.recipes
    localStorage.setItem('userInfo', JSON.stringify(localStorageUser))
    localStorage.setItem('myRecipes', JSON.stringify(data.recipes))

  } catch (error) {
    dispatch({
      type: MY_RECIPE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}