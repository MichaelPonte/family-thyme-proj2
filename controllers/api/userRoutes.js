const router = require('express').Router();

// Import the model
const User = require('../../models/User');

// CREATE a recipe
router.post('/', (req, res) => {
  // Use Sequelize's `create()` method to add a row to the table
  // `INSERT INTO` in plain SQL

  //use the model, call the create function & pass what needs to be passed 
  //for multiples you can use the bulkCreate function 
  User.create({
    //getting user input
    userName: req.body.userName,
    password: req.body.password
  })
    //call back function  
    .then((newUser) => {
      // Send the newly created row as a JSON object
      res.json(newUser);
    })
    //to handle the error
    .catch((err) => {
      res.status(400).json(err);
    });
});

// CREATE multiple entries
router.post('/controllers', (req, res) => {
  // Multiple rows can be created with `bulkCreate()` and an array
  // This could also be moved to a separate Node.js script to ensure it only happens once
  User.bulkCreate([

    //array of an object so we can pass multiple entries in the table (this is the same as 'insert into' from SQL)
    {
      //static data 
      //generating som edata before starting application
      userName: 'jag',
      password: '1209'

    },
    {
        userName: 'MPonte',
        password: '1337'
  
    },
    {
        userName: 'sarafN',
        password: '6666'
  
    }    
  ])
    .then(() => {
      res.send('Family recipe database seeded!');
    })
    //the catch error will catch all errors instead of having to put it every time 
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;



