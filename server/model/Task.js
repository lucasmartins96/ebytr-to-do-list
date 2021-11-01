const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: String,
  createdAt: { type: Date, default: Date.now },
  status: String,
});

module.exports = mongoose.model('Task', taskSchema);
