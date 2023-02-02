const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');


router.post('/', async (req, res) => {
  try {
    const dbUserData = User.findOne({
      where: {
        username: req.body.username,
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
      res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
    });

    res.redirect('/homepage');
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;



