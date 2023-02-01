const router = require('express').Router();

// Import the model
const Recipe = require('../../models/Recipe');


// CREATE a recipe
router.post('/', (req, res) => {

  //use the model, call the create function & pass what needs to be passed 
  //for multiples you can use the bulkCreate function 
  Recipe.create({
    //getting user input
    title: req.body.title,
    directions: req.body.directions,
    category: req.body.category,
    prep_time: req.body.prep_time
  })
    //call back function  
    .then((newRecipe) => {
      // Send the newly created row as a JSON object
      res.json(newRecipe);
    })
    //to handle the error
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;



