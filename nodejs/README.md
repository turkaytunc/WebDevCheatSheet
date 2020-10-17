# :tada: Nodejs cheatsheet

## :pencil: Index

- [QueryStrings](#QueryStrings)

### QueryStrings

```js
// "http://example.com/?first=kevin&last=smith";
let parsedURL = url.parse(request.url);
let parsedParams = querystring.parse(parsedURL);

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

// Output of querystring.parse(parsedURL);

{ first : "kevin", last : "smith" }
```
