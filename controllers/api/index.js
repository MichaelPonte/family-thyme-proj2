const router = require('express').Router();
const userRoutes = require('./userRoutes');
const foodRoutes = require('./foodRoutes');


//use a more unique name to differentiate 

router.use('/userRoutes', userRoutes);
router.use('/', foodRoutes);

module.exports = router;
