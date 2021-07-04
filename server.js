const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// app
const app = express();

// db setup
mongoose
  .connect(process.env.DATABASE, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB CONNECTED'))
  .catch((err) => console.log(`DB CONNECTION ERR`, err));

// load API route
const API_ROUTER = require('./api.routes');

// middlewares
app.use(morgan('dev'));
app.use(express.json({ limit: '2mb' }));
app.use(cors());

// routes
app.use('/api', API_ROUTER);

// port
const port = process.env.PORT || 8000;

app.listen(port, function (err, done) {
  if (err) {
    console.log('Server listening failed', err);
  } else {
    console.log('Server listening at port ' + port);
    console.log('Press CTRL + C to exit');
  }
});
