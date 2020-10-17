# :tada: Nodejs cheatsheet

## :pencil: Index

- [QueryStrings](#QueryStrings)
  - [url parse](#url-parse)
  - [querystring parse](#querystring-parse)
  - [querystring stringify](#querystring-stringify)

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
