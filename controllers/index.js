const router = require('express').Router();

//API routes 

const apiRoute = require('./htmlroutes');

router.use('/', apiRoute);

module.exports = router;