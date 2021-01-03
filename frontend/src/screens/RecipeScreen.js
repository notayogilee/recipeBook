import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const RecipeScreen = ({ match }) => {
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    const fetchRecipe = async () => {
      const { data } = await axios.get(`/api/recipes/${match.params.id}`)

      setRecipe(data)
    }
    fetchRecipe()
  }, [])
  console.log(recipe)
  return (
    <div>
      Reicpe
    </div>
  )
}

export default RecipeScreen
