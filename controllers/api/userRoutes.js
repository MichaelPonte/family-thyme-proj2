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

    res.redirect('/homepage');
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;



