
const router = require('express').Router();
const withAuth = require('../utils/auth');

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
router.get('/', async (req, res) => {
    // rendering the page or send error

    try {
        res.render('login');
    
    } catch (err) {
        console.log(err); 
        res.status(500).json(err);
    }

});


module.exports = router; 