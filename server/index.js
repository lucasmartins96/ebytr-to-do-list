const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/EbytrToDoList';
const PORT = process.env.PORT || 3001;

mongoose.connect(MONGO_URI, { 
  useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
  console.log('servidor rodando');
});
