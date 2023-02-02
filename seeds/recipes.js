const { Recipe } = require('../models')

const recipeData = [
    {
        title: 'Pasta Salad',
        directions: 'Bring a large saucepan of salted water to the boil\r\nAdd the pasta, stir once and cook for about 10 minutes or as directed on the packet.\r\nMeanwhile, wash the tomatoes and cut into quarters. Slice the olives. Wash the basil.\r\nPut the tomatoes into a salad bowl and tear the basil leaves over them. Add a tablespoon of olive oil and mix.\r\nWhen the pasta is ready, drain into a colander and run cold water over it to cool it quickly.\r\nToss the pasta into the salad bowl with the tomatoes and basil.\r\nAdd the sliced olives, drained mozzarella balls, and chunks of tuna. Mix well and let the salad rest for at least half an hour to allow the flavours to mingle.\r\nSprinkle the pasta with a generous grind of black pepper and drizzle with the remaining olive oil just before serving.',
        category: 'easy meals',
        prep_time: '20 mins'
  
      },
      {
        title: 'Peanut Butter Cookies',
        directions: "Preheat oven to 350ºF (180ºC).\r\nIn a large bowl, mix together the peanut butter, sugar, and egg.\r\nScoop out a spoonful of dough and roll it into a ball. Place the cookie balls onto a nonstick baking sheet.\r\nFor extra decoration and to make them cook more evenly, flatten the cookie balls by pressing a fork down on top of them, then press it down again at a 90º angle to make a criss-cross pattern.\r\nBake for 8-10 minutes or until the bottom of the cookies are golden brown.\r\nRemove from baking sheet and cool.\r\nEnjoy!",
        category: 'snacks',
        prep_time: '45 mins'
  
      },
      {
        title: 'Tahini Lentils',
        directions: 'In a jug, mix the tahini with the zest and juice of the lemon and 50ml of cold water to make a runny dressing. Season to taste, then set aside.\r\nHeat the oil in a wok or large frying pan over a medium-high heat. Add the red onion, along with a pinch of salt, and fry for 2 mins until starting to soften and colour. Add the garlic, pepper, green beans and courgette and fry for 5 min, stirring frequently.\r\nTip in the kale, lentils and the tahini dressing. Keep the pan on the heat for a couple of mins, stirring everything together until the kale is wilted and it’s all coated in the creamy dressing.',
        category: 'gourmet meals',
        prep_time: '60 mins'
  
      },
      {
        title: 'Chocolate Cake',
        directions: 'Preheat the oven to 180°C/350°F/Gas Mark 4. Grease and line the base of an 8 in round spring form cake tin with baking parchment\r\nBreak the chocolate into a heatproof bowl and place over a saucepan of gently simmering water and stir until it melts. (or melt in the microwave for 2-3 mins stirring occasionally)\r\nPlace the butter and sugar in a mixing bowl and cream together with a wooden spoon until light and fluffy. Gradually beat in the eggs, adding a little flour if the mixture begins to curdle. Fold in the remaining flour with the cooled, melted chocolate and milk. Mix until smooth.\r\nSpread the mixture into the cake tin and bake for 50-55 mins or until firm in the centre and a skewer comes out cleanly. Cool for 10 minutes, then turn out and cool completely.',
        category: 'desserts',
        prep_time: '45 mins'
  
      }
];
const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;