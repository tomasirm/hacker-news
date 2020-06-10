const express = require('express');
const cors = require('cors');
const app = express();
const endpoint = require('./routes/endpoint');
const bodyParser = require('body-parser');
const crones = require('./croneJobs/hackerNews');
require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());
app.use('/endpoint', endpoint);
crones.cronFunction();

module.exports = app;