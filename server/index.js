// Express Server
// FIX ME :(
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const router = require('./router');

const server = express();
const port = 3000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan('dev'));
server.use(express.static(path.join(__dirname + '/../client/dist')));

server.use('/', router);

server.listen(port, () => console.log('Connected to port: 3000'));
