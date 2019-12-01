const express = require('express');
const cors = require('cors');
const app = express();
const errorSerializer = require('./api/serializers/errorSerializer');

const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/tasks', require('./api/controllers/taskController'));
app.use('/projects', require('./api/controllers/projectController'));
app.use('/users', require('./api/controllers/userController'));

app.use(function(req, res) {
  res.status(404).send(errorSerializer(404, 'url not found'));
});

module.exports = app;
