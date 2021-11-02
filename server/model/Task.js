const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, required: true },
});

module.exports = mongoose.model('Task', taskSchema);
