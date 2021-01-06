import axios from 'axios'
import {
  USER_LOADED_REQUEST,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL
} from '../constants/authConstants'
import setAuthToken from '../utils/setAuthToken'

const loadUser = () => async dispatch => {

  dispatch({
    type: USER_LOADED_REQUEST
  })

  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  try {
    const { data } = await axios.get('/api/users/auth')

    dispatch({
      type: USER_LOADED_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: USER_LOADED_FAIL
    })
  }
}

export default loadUser