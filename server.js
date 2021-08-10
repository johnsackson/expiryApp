const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

// api file for interacting with MongoDB
const api = require('./server/routes/api');

// parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// angular output
app.use(express.static(path.join(__dirname, 'dist/expiryApp')));

// api location
app.use('/api', api);

// send requests to angular app
api.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/expiryApp/index.html'));
});

// set port
const port = process.env.PORT || '3001';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost: ${port}`)); 