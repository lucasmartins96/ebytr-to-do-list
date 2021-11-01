const express = require('express');
const taskController = require('../controller/taskController');

const router = express.Router();

router.route('/').get(taskController.getAll);

module.exports = router;
