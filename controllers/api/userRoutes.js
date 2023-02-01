const router = require('express').Router();

// Import the model
const User = require('../../models/User');

// CREATE a recipe
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        userName: req.body.userName,
      },
    });

    if (!dbUserData) {
      res.status(400).json({ message: 'Incorrect username or password' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect username or password' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// // CREATE multiple entries
// router.post('/controllers', (req, res) => {
//   // Multiple rows can be created with `bulkCreate()` and an array
//   // This could also be moved to a separate Node.js script to ensure it only happens once
//   User.bulkCreate([

//     //array of an object so we can pass multiple entries in the table (this is the same as 'insert into' from SQL)
//     {
//       //static data 
//       //generating som edata before starting application
//       userName: 'jag',
//       password: '1209'

//     },
//     {
//         userName: 'MPonte',
//         password: '1337'
  
//     },
//     {
//         userName: 'sarafN',
//         password: '6666'
  
//     }    
//   ])
//     .then(() => {
//       res.send('Family recipe database seeded!');
//     })
//     //the catch error will catch all errors instead of having to put it every time 
//     .catch((err) => {
//       res.json(err);
//     });
// });

module.exports = router;



