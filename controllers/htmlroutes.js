const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => { //Rendering the login page
    try {
        if (!req.session?.loggedIn) {
        res.render('login');
        } else {
            res.redirect('/homepage');
        }
    } catch (err) {
        console.log(err); 
        res.status(500).json(err);
    }
});

router.get('/homepage', withAuth, async (req, res) => { //Rendering homepage
    try {
        res.render('homepage', {
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



module.exports = router; 