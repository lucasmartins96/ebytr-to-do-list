const express = require('express');
const cors = require('cors');

const taskRoutes = require('../routes/taskRoutes');
const handleErrors = require('../middlewares/handleErrors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/tasks', taskRoutes);
app.use(handleErrors);

module.exports = app;
