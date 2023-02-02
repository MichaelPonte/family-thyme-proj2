const User = require("./User");
const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

router.get('/', async (req, res) => {
  const recipes = await Recipe.findAll({ limit: 5 });
  res.render('homepage', { recipes });
});

module.exports = router;



module.exports = { User, };

