const express = require('express');
const rescue = require('express-rescue');

const taskController = require('../controller/taskController');

const router = express.Router();

router.route('/')
  .get(rescue(taskController.getAll));

module.exports = router;
