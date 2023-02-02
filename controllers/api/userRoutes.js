const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');


router.post('/', async (req, res) => {
  try {
    const dbUserData = User.findOne({
      where: {
        userName: req.body.userName,
      },
    });

    if (!dbUserData) {
      console.log(User.findAll());
      console.log(dbUserData);
      console.log(req.body.username);
      res.status(400).json({ message: 'Incorrect username' });
      return;
    }

    const validPassword = bcrypt.compareSync(req.body.password, dbUserData.password);




    //const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json({ user: dbUserData, message: 'You are now logged in, feel free to edit recipes!' });
    });

    res.redirect('/homepage');
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



