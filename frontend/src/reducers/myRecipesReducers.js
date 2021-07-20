import {
  MY_RECIPE_LIST,
  MY_RECIPE_LIST_ADD,
  MY_RECIPE_LIST_REMOVE,
  MY_RECIPE_LIST_REQUEST,
  MY_RECIPE_LIST_FAIL
} from '../constants/myRecipeConstants'

export const myRecipeListReducer = (state = { myRecipes: [] }, action) => {
  switch (action.type) {
    case MY_RECIPE_LIST_REQUEST:
      return { loading: true }
    case MY_RECIPE_LIST:
      return { loading: false, recipes: action.payload }
    case MY_RECIPE_LIST_ADD:
      return { loading: false, recipes: action.payload }
    case MY_RECIPE_LIST_REMOVE:
      return { loading: false, recipes: action.payload }
    case MY_RECIPE_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

// export const userRecipeRemoveReducer = (state = { myRecipes: { recipes: [] } }, action) => {
//   switch (action.type) {
//     case USER_RECIPE_REMOVE_REQUEST:
//       return { loading: true }
//     case USER_RECIPE_REMOVE_SUCCESS:
//       return { loading: false, recipes: action.payload }
//     case USER_RECIPE_REMOVE_FAIL:
//       return { loading: false, error: action.payload }
//     default:
//       return state
//   }
// }

// export const userRecipeAddReducer = (state = { myRecipes: { recipes: [] } }, action) => {
//   switch (action.type) {
//     case USER_RECIPE_ADD_REQUEST:
//       return { loading: true }
//     case USER_RECIPE_ADD_SUCCESS:
//       return { loading: false, myRecipes: action.payload }
//     case USER_RECIPE_ADD_FAIL:
//       return { loading: false, error: action.payload }
//     default:
//       return state
//   }
// }