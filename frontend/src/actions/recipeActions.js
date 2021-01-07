import axios from 'axios'
import {
  RECIPE_LIST_REQUEST,
  RECIPE_LIST_SUCCESS,
  RECIPE_LIST_FAIL,
  RECIPE_DETAILS_REQUEST,
  RECIPE_DETAILS_SUCCESS,
  RECIPE_DETAILS_FAIL
} from '../constants/recipeConstants'

export const listRecipes = () => async (dispatch, getState) => {

  try {
    const { userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    dispatch({ type: RECIPE_LIST_REQUEST })

    const { data } = await axios.get('/api/recipes', config)

    dispatch({
      type: RECIPE_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: RECIPE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }

}

export const listRecipeDetails = (id) => async (dispatch, getState) => {
  try {
    const { userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    dispatch({ type: RECIPE_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/recipes/${id}`, config)

    dispatch({
      type: RECIPE_DETAILS_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: RECIPE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}