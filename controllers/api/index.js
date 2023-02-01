const router = require('express').Router();

const userRoute = require('./userRoutes');
const foodRoute = require('./foodRoutes');

router.use('/users', userRoute);
router.use('/recipes', foodRoute);

module.exports = router;