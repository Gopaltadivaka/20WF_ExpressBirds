const axios = require('axios');

exports.todos_get = function(req, res) {
    axios.get('https://jsonplaceholder.typicode.com/todos/2')
    .then(function (response) {
      res.render('todos', response.data);
    })
};
