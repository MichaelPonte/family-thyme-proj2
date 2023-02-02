const recipeData = require('./recipe.js');

function addRecipe(title, category, directions) {
  recipeData.push({
    Title: title,
    Category: category,
    Directions: directions
  });
}

module.exports = {
  addRecipe
};

  