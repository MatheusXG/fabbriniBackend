const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');


const app = express();
app.use(cors());
require('dotenv/config');


mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@dbprojetos.zgeh8.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
);

app.use(express.json());
app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(express.json());


app.listen(process.env.PORT || 3000, () => {
  console.log(`===============Servidor está rondando===============`);
});
