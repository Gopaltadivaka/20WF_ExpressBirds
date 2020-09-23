/* GET a todo from a 3rd party API*/
const express = require('express');
const router = express.Router();
const axios = require('axios');
const todosController = require('../controllers/todosController');

router.get('/', todosController.todos_get);


module.exports = router;