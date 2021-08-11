# ExpiryApp

This is a study/learn tutorial that runs on MEAN(Mongo ExpressJS Angular NodeJS) stack.

## Install dependencies

`npm install` This will install the project dependencies

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Prepare

Make sure NodeJS is installed, MongoDB installed and running(use  `mongodb` to run) and has the required data.

## Running the project

Run `node server` and open http://localhost:3001 in a browser. Here we go.


## Server code(server.js)

// api file for interacting with MongoDB
`const api = require('./server/routes/api');`

// parsers
`app.use(bodyParser.json());`
`app.use(bodyParser.urlencoded({ extended: false }));`

// angular/front end code output
`app.use(express.static(path.join(__dirname, 'dist/expiryApp')));`

// api location
`app.use('/api', api);`

// send requests to angular app
`api.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/expiryApp/index.html'));
});`

// set port
`const port = process.env.PORT || '3001';`
`app.set('port', port);`

`const server = http.createServer(app);`

`server.listen(port, () => console.log(`Running on localhost: ${port}`));`


## API code(server/routes/api.js)

// establishing connection 
`const connection = (closure) => {
  return MongoClient.connect('mongodb://localhost:27017/products', (err, db) => {
    if (err) return console.log(err);

    closure(db);
  });
};`

// error case handler
`const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err === 'object' ? err.message : err;
  res.status(501).json(response);
};`

// success case handler
`const response = {
  status: 200,
  data: [],
  message: null
};`

// '/vegitables' api
`router.get('/vegitables', (req, res) => {
  connection((db) => {
    db.collection('vegitables')
    .find()
    .toArray()
    .then((users) => {
      response.data = users;
      res.json(response);
    })
    .catch((err) => sendError(err, res));
  });
});`

// '/fruits' api
`router.get('/fruits', (req, res) => {
  connection((db) => {
    db.collection('fruits')
    .find()
    .toArray()
    .then((users) => {
      response.data = users;
      res.json(response);
    })
    .catch((err) => sendError(err, res));
  });
});`

// '/groceries' api
`router.get('/groceries', (req, res) => {
  connection((db) => {
    db.collection('groceries')
    .find()
    .toArray()
    .then((users) => {
      response.data = users;
      res.json(response);
    })
    .catch((err) => sendError(err, res));
  });
});`
