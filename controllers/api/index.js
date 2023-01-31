const router = require('express').Router();
const userRoutes = require('./userRoutes');
const foodRoutes = require('./foodRoutes');

router.use('/', userRoutes);
router.use('/', foodRoutes);

module.exports = router;
