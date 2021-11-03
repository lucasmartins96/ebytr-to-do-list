const express = require('express');
const rescue = require('express-rescue');

const taskController = require('../controller/taskController');

const router = express.Router();

router.route('/')
  .get(rescue(taskController.getAll))
  .post(rescue(taskController.create));

router.route('/:id')
  .delete(rescue(taskController.deleteById));

module.exports = router;
