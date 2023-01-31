const router = require('express').Router();

router.get('/', async (req, res) => {
    // rendering the page or send error

    try {
        res.render('login.hbs');
    
    } catch (err) {
        console.log(err); 
        res.status(500).json(err);
    }

});





module.exports = router; 