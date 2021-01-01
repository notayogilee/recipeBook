import bruchetta from './images/bruchettaSm.jpg'
import gingerbread from './images/gingerbreadSm.jpg'
import wings from './images/wingsSm.jpg'
import dip from './images/dipSm.jpg'

const recipes = [
  {
    title: 'Bruchetta',
    description: 'A cold appetizer to be put on crackers or scoopable veggies.',
    level: 'beginner',
    imperialUnits: true,
    prepTime: '30 minutes',
    cookTime: '0',
    isPrivate: false,
    ingredients: [
      {
        ingredient: "tomato",
        amount: 2,
        unitOfMeasurement: "pound",
        note: "chopped"
      },
      {
        ingredient: "basil",
        amount: 4,
        unitOfMeasurement: "teaspoon",
        note: "chiffonade"
      },
      {
        ingredient: "garlic",
        amount: 2,
        unitOfMeasurement: "cloves",
        note: "crushed"
      },
      {
        ingredient: "dried oregano",
        amount: 1,
        unitOfMeasurement: "teaspoon",
      },
      {
        ingredient: "chili flakes",
        amount: 0.5,
        unitOfMeasurement: "teaspoon",
      },
      {
        ingredient: "salt",
        amount: 0.5,
        unitOfMeasurement: "teaspoon",
      },
    ],
    directions: "Mix everything in a bowl and let sit for an hour in the fridge. Serve on toasted baguette.",
    image: bruchetta,
    tips: 'Drain excess water from tomatoes.'
  },
  {
    title: 'Turkey Wings',
    description: 'Move over chicken wings, these are juicy and bigger!',
    level: 'beginner',
    imperialUnits: true,
    prepTime: '15 minutes',
    cookTime: '60 minutes',
    isPrivate: false,
    ingredients: [
      {
        ingredient: "turkey wings",
        amount: 2,
        unitOfMeasurement: "pounds",
        note: "rinced and patted dry"
      },
      {
        ingredient: "white wine",
        amount: 0.5,
        unitOfMeasurement: "cup",
      },
      {
        ingredient: "butter",
        amount: 2,
        unitOfMeasurement: "tablespoon",
        note: "melted"
      },
      {
        ingredient: "garlic powder",
        amount: 1,
        unitOfMeasurement: "teaspoon",
      },
      {
        ingredient: "dried oregano",
        amount: 1,
        unitOfMeasurement: "teaspoon",
      },
      {
        ingredient: "chili flakes",
        amount: 0.5,
        unitOfMeasurement: "teaspoon",
      },
      {
        ingredient: "salt",
        amount: 1,
        unitOfMeasurement: "teaspoon",
      },
    ],
    directions: "Mix everything except turkey wings in a bowl. Spread mixure over turkey wings. Put wings in a baking dish and cook at 425 F for 1 hour.",
    image: wings,
    tips: 'Let wings rest covered for 10 minutes once out of oven.'
  },
  {
    title: 'Gingerbread Cookies',
    description: 'This is the BEST recipe for gingerbread cookies I have ever tasted. It looks complicated, but isn\'t.',
    level: 'intermediate',
    imperialUnits: true,
    prepTime: '20 minutes',
    cookTime: '12 minutes',
    isPrivate: false,
    ingredients: [
      {
        ingredient: "all-purpose flour",
        amount: 6,
        unitOfMeasurement: "cup",
      },
      {
        ingredient: "baking powder",
        amount: 1,
        unitOfMeasurement: "tablespoon",
      },
      {
        ingredient: "ginger",
        amount: 1,
        unitOfMeasurement: "tablepoon",
      },
      {
        ingredient: "ground nutmeg",
        amount: 1,
        unitOfMeasurement: "teaspoon",
      },
      {
        ingredient: "ground cloves",
        amount: 1,
        unitOfMeasurement: "teaspoon",
      },
      {
        ingredient: "ground cinnamon",
        amount: 1,
        unitOfMeasurement: "teaspoon",
      },
      {
        ingredient: "shortening",
        amount: 1,
        unitOfMeasurement: "cup",
        note: "melted and cooled slightly"
      },
      {
        ingredient: "molasses",
        amount: 1,
        unitOfMeasurement: "cup",
      },
      {
        ingredient: "brown sugar",
        amount: 1,
        unitOfMeasurement: "cup",
      },
      {
        ingredient: "water",
        amount: 0.5,
        unitOfMeasurement: "cup",
      },
      {
        ingredient: "egg",
        amount: "1",
        unitOfMeasurement: "whole"
      },
      {
        ingredient: "vanilla",
        amount: 1,
        unitOfMeasurement: "teaspoon",
      },
    ],
    directions: "Sift together the flour, baking powder, ginger, nutmeg, cloves, and cinnamon; set aside. In a medium bowl, mix together the shortening, molasses, brown sugar, water, egg, and vanilla until smooth. Gradually stir in the dry ingredients, until they are completely absorbed. Divide dough into 3 pieces, pat down to 1 1/2 inch thickness, wrap in plastic wrap, and refrigerate for at least 3 hours. Preheat oven to 350 degrees F (175 degrees C). On a lightly floured surface, roll the dough out to 1/4 inch thickness. Cut into desired shapes with cookie cutters. Place cookies 1 inch apart onto an ungreased cookie sheet. Bake for 10 to 12 minutes in the preheated oven. When the cookies are done, they will look dry, but still be soft to the touch. Remove from the baking sheet to cool on wire racks. When cool, the cookies can be frosted with the icing of your choice.",
    image: gingerbread
  },
  {
    title: 'Simple Artichoke Dip',
    description: 'Serve with sliced baguettes or pita chips.',
    level: 'beginner',
    imperialUnits: true,
    prepTime: '5 minutes',
    cookTime: '20 minutes',
    isPrivate: true,
    ingredients: [
      {
        ingredient: "artichoke hearts",
        amount: 14,
        unitOfMeasurement: "ounces",
        note: "drained and chopped"
      },
      {
        ingredient: "mayonnaise",
        amount: 1,
        unitOfMeasurement: "cup",
      },
      {
        ingredient: "parmesan cheese",
        amount: 1,
        unitOfMeasurement: "cup",
        note: "grated"
      },
      {
        ingredient: "dried oregano",
        amount: 1,
        unitOfMeasurement: "teaspoon",
      },
      {
        ingredient: "chili flakes",
        amount: 0.5,
        unitOfMeasurement: "teaspoon"
      },
      {
        ingredient: "salt",
        amount: 0.5,
        unitOfMeasurement: "teaspoon"
      },
    ],
    directions: "Mix everything in a bowl and let sit for an hour in the fridge. Serve on toasted baguette.",
    image: dip
  }
]

export default recipes