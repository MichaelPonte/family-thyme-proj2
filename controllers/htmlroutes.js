

const router = require('express').Router();

router.get('/', async (req, res) => {
    // rendering the page or send error

    try {
        res.render('login');
    
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