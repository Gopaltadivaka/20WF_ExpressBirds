const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', name: 'John K' });
});

/* GET a todo from a 3rd party API*/
router.get('/todos', function (req, res, next) {
  axios.get('https://jsonplaceholder.typicode.com/todos/2')
    .then(function (response) {
      console.log(response);
      res.render('todos', response.data);
    })
});

module.exports = router;
