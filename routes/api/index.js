// this file will import all of the API routes to prefix their endpoint names and package them up
const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');

router.use('/pizzas', pizzaRoutes);

module.exports = router; 