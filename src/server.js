const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const routes = require('./routes');


// const app = express();
require('dotenv/config');
app.use(express.json());

app.use((req, res, next) => {
  req.header("Access-Control-Allow-Origin", "*");
  req.header("Access-Control-Allow-Methods", 'GET, POST, PUT');
  app.use(cors());
  console.log('middleware')
  next();

});

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@dbprojetos.zgeh8.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
);

// app.use(express.json());
app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));


app.listen(process.env.PORT || 3333, () => {
  console.log(`===============Servidor está rondando===============`);
});
