const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const allowed = [
  '.js',
  '.css',
  '.png',
  '.jpg'
];

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, './html')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  if (allowed.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
    res.sendFile(path.resolve(`./html/${req.url}`));
  } else {
    res.sendFile(path.join(__dirname, './html/index.html'));
  }
});

/**
 * Get port from environment and store in Express.
 */
let defaultPort = process.argv.length < 3 ? 8000 : process.argv[2];

const port = process.env.PORT ||  defaultPort;
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`Server running on localhost:${port}`));

