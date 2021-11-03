require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/EbytrToDoList';
const PORT = process.env.PORT || 3001;

mongoose.connect(MONGO_URI, { 
  useNewUrlParser: true, useUnifiedTopology: true });
  
const app = require('./app');

app.listen(PORT, () => {
  console.log(`servidor rodando na porta ${PORT}`);
});
