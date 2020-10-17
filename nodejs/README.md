# :tada: Nodejs cheatsheet

## :pencil: Index

- [Express server](#Express-server)

  - [get request](#get-request)
  - [post request](#post-request)
  - [static file and bodyparser middleware](#static-file-and-bodyparser-middleware)
  - [environment variables](#environment-variables)
  - [middleware chaining using next function](#middleware-chaining-using-next-function)
  - [route parameters](#route-parameters)
  - [query parameters](#query-parameters)

- [QueryStrings](#QueryStrings)

  - [url parse](#url-parse)
  - [querystring parse](#querystring-parse)
  - [querystring stringify](#querystring-stringify)

### Express server

### get request

```js
let app = require('express')();
app.get('/', function (req, res) {
  res.send('Hello Express');
});
```

### post request

```js
let app = require('express')();
app.post('/name', (req, res) => {
  res.json({ name: `${req.body.first} ${req.body.last}` });
});
```

### serve html file

```js
let app = require('express')();
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});
```

### static file and bodyparser middleware

```js
let app = require('express')();
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: false }));
```

### environment variables

```js
// Use the .env file to configure the app
let app = require('express')();
app.get('/json', (req, res) => {
  const message =
    process.env.MESSAGE_STYLE === 'uppercase'
      ? 'Hello json'.toUpperCase()
      : 'Hello json';
  res.json({ message: message });
});
```

### middleware chaining using next function

```js
let app = require('express')();
app.get(
  '/now',
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res, next) => {
    res.send({ time: req.time });
  }
);
```

### route parameters

```js
let app = require('express')();
app.get('/:word/echo', (req, res) => {
  res.send({ echo: req.params.word });
});
```

### query parameters

```js
// /name?first=<firstname>&last=<lastname>
let app = require('express')();
app.get('/name', (req, res) => {
  res.json({ name: `${req.query.first} ${req.query.last}` });
});
```

### QueryStrings

### url parse

```js
// "http://example.com/?first=kevin&last=smith";
let parsedURL = url.parse(request.url);

// Output of url.parse(request.url);
{
protocol: 'http:',
slashes: true,
auth: null,
host: 'example.com',
port: null,
hostname: 'example.com',
hash: null,
search: '?first=kevin&last=smith',
query: 'first=kevin&last=smith',
pathname: '/',
path: '/?first=kevin&last=smith',
href: 'http://example.com/?first=kevin&last=smith'
}

```

### querystring parse

```js
// "http://example.com/?first=kevin&last=smith";
let parsedURL = url.parse(request.url);

let parsedParams = querystring.parse(parsedURL);

// Output of querystring.parse(parsedURL);
{ first : "kevin", last : "smith" }
```

### querystring stringify

```js
const qs = querystring.stringify({
  first: kevin,
  last: smith,
});
// Returns "first=kevin&last=smith"
```
