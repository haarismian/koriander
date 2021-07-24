const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const routes = require('./routes/api');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Welcome to the backend');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
