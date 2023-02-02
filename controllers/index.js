const router = require('express').Router();

//API routes 

const htmlRoute = require('./htmlroutes');
const apiRoute = require('./api');

router.use('/', htmlRoute);
router.use('/api', apiRoute);

module.exports = router;