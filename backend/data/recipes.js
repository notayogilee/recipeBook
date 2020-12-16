const recipes = [
  {
    _id: 'a',
    creator: 1,
    title: 'Bruchetta',
    description: 'A cold appetizer to be put on crackers or scoopable veggies.',
    level: 'beginner',
    units: 'imperial',
    prepTime: '30 minutes',
    cookTime: '0',
    Private: false,
    ingredients: [
      {
        ingredient: "tomato",
        amount: 2,
        unit: "pound",
        note: "chopped"
      },
      {
        ingredient: "basil",
        amount: 4,
        unit: "teaspoon",
        note: "chiffonade"
      },
      {
        ingredient: "garlic",
        amount: 2,
        unit: "cloves",
        note: "crushed"
      },
      {
        ingredient: "dried oregano",
        amount: 1,
        unit: "teaspoon",
      },
      {
        ingredient: "chili flakes",
        amount: 0.5,
        unit: "teaspoon",
      },
      {
        ingredient: "salt",
        amount: 0.5,
        unit: "teaspoon",
      },
    ],
    directions: "Mix everything in a bowl and let sit for an hour in the fridge. Serve on toasted baguette.",
    image: '',
    notes: 'Drain excess water from tomatoes.'
  },
  {
    _id: 'b',
    creator: 3,
    title: 'Turkey Wings',
    description: 'Move over chicken wings, these are juicy and bigger!',
    level: 'beginner',
    units: 'imperial',
    prepTime: '15 minutes',
    cookTime: '60 minutes',
    Private: false,
    ingredients: [
      {
        ingredient: "turkey wings",
        amount: 2,
        unit: "pounds",
        note: "rinced and patted dry"
      },
      {
        ingredient: "white wine",
        amount: 0.5,
        unit: "cup",
      },
      {
        ingredient: "butter",
        amount: 2,
        unit: "tablespoon",
        note: "melted"
      },
      {
        ingredient: "garlic powder",
        amount: 1,
        unit: "teaspoon",
      },
      {
        ingredient: "dried oregano",
        amount: 1,
        unit: "teaspoon",
      },
      {
        ingredient: "chili flakes",
        amount: 0.5,
        unit: "teaspoon",
      },
      {
        ingredient: "salt",
        amount: 1,
        unit: "teaspoon",
      },
    ],
    directions: "Mix everything except turkey wings in a bowl. Spread mixure over turkey wings. Put wings in a baking dish and cook at 425 F for 1 hour.",
    image: '',
    notes: 'Let wings rest covered for 10 minutes once out of oven.'
  },
  {
    _id: 'c',
    creator: 4,
    title: 'Gingerbread Cookies',
    description: 'This is the BEST recipe for gingerbread cookies I have ever tasted. It looks complicated, but isn\'t. I have used this recipe for many years and always get compliments on it.',
    level: 'intermediate',
    units: 'imperial',
    prepTime: '20 minutes',
    cookTime: '12 minutes',
    Private: false,
    ingredients: [
      {
        ingredient: "all-purpose flour",
        amount: 6,
        unit: "cup",
      },
      {
        ingredient: "baking powder",
        amount: 1,
        unit: "tablespoon",
      },
      {
        ingredient: "ginger",
        amount: 1,
        unit: "tablepoon",
      },
      {
        ingredient: "ground nutmeg",
        amount: 1,
        unit: "teaspoon",
      },
      {
        ingredient: "ground cloves",
        amount: 1,
        unit: "teaspoon",
      },
      {
        ingredient: "ground cinnamon",
        amount: 1,
        unit: "teaspoon",
      },
      {
        ingredient: "shortening",
        amount: 1,
        unit: "cup",
        note: "melted and cooled slightly"
      },
      {
        ingredient: "molasses",
        amount: 1,
        unit: "cup",
      },
      {
        ingredient: "brown sugar",
        amount: 1,
        unit: "cup",
      },
      {
        ingredient: "water",
        amount: 0.5,
        unit: "cup",
      },
      {
        ingredient: "egg",
        amount: "1",
        unit: "whole"
      },
      {
        ingredient: "vanilla",
        amount: 1,
        unit: "teaspoon",
      },
    ],
    directions: "Sift together the flour, baking powder, ginger, nutmeg, cloves, and cinnamon; set aside. In a medium bowl, mix together the shortening, molasses, brown sugar, water, egg, and vanilla until smooth. Gradually stir in the dry ingredients, until they are completely absorbed. Divide dough into 3 pieces, pat down to 1 1/2 inch thickness, wrap in plastic wrap, and refrigerate for at least 3 hours. Preheat oven to 350 degrees F (175 degrees C). On a lightly floured surface, roll the dough out to 1/4 inch thickness. Cut into desired shapes with cookie cutters. Place cookies 1 inch apart onto an ungreased cookie sheet. Bake for 10 to 12 minutes in the preheated oven. When the cookies are done, they will look dry, but still be soft to the touch. Remove from the baking sheet to cool on wire racks. When cool, the cookies can be frosted with the icing of your choice.",
    image: '',
    notes: 'Drain excess water from tomatoes.'
  },
  {
    _id: 'd',
    creator: 4,
    title: 'Simple Artichoke Dip',
    description: 'Serve with sliced baguettes or pita chips.',
    level: 'beginner',
    units: 'imperial',
    prepTime: '5 minutes',
    cookTime: '20 minutes',
    Private: true,
    ingredients: [
      {
        ingredient: "artichoke hearts",
        amount: 14,
        unit: "ounces",
        note: "drained and chopped"
      },
      {
        ingredient: "mayonnaise",
        amount: 1,
        unit: "cup",
      },
      {
        ingredient: "parmesan cheese",
        amount: 1,
        unit: "cup",
        note: "grated"
      },
      {
        ingredient: "dried oregano",
        amount: 1,
        unit: "teaspoon",
      },
      {
        ingredient: "chili flakes",
        amount: 0.5,
        unit: "teaspoon"
      },
      {
        ingredient: "salt",
        amount: 0.5,
        unit: "teaspoon"
      },
    ],
    directions: "Mix everything in a bowl and let sit for an hour in the fridge. Serve on toasted baguette.",
    image: '',
    notes: 'Drain excess water from tomatoes.'
  }
]

module.exports = recipes