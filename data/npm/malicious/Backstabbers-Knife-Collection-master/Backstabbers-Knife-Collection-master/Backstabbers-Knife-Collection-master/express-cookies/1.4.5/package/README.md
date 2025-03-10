# express-cookies

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Parse `Cookie` header and populate `req.cookies` with an object keyed by the cookie
names. Optionally you may enable signed cookie support by passing a `secret` string,
which assigns `req.secret` so it may be used by other middleware.

## Installation

```sh
$ npm install express-cookies
```

## API

```js
var express = require('express');
var expressCookies = require('express-cookies');

var app = express();
app.use(expressCookies());
```

### expressCookies(secret, options)

* `secret` a string or array used for signing cookies. This is optional and if not specified, will not parse signed cookies. If a string is provided, this is used as the secret. If an array is provided, an attempt will be made to unsign the cookie with each secret in order.
* `options` an object that is passed to `cookie.parse` as the second option. See [cookie](https://www.npmjs.org/package/cookie) for more information.
    * `decode` a function to decode the value of the cookie

### expressCookies.JSONCookie(str)

Parse a cookie value as a JSON cookie. This will return the parsed JSON value if it was a JSON cookie, otherwise it will return the passed value.

### expressCookies.JSONCookies(cookies)

Given an object, this will iterate over the keys and call `JSONCookie` on each value, replacing the original value with the parsed value. This returns the same object that was passed in.

### expressCookies.signedCookie(str, secret)

Parse a cookie value as a signed cookie. This will return the parsed unsigned value if it was a signed cookie and the signature was valid. If the value was not signed, the original value is returned. If the value was signed but the signature could not be validated, `false` is returned.

The `secret` argument can be an array or string. If a string is provided, this is used as the secret. If an array is provided, an attempt will be made to unsign the cookie with each secret in order.

### expressCookies.signedCookies(cookies, secret)

Given an object, this will iterate over the keys and check if any value is a signed cookie. If it is a signed cookie and the signature is valid, the key will be deleted from the object and added to the new object that is returned.

The `secret` argument can be an array or string. If a string is provided, this is used as the secret. If an array is provided, an attempt will be made to unsign the cookie with each secret in order.

## Example

```js
var express = require('express');
var expressCookies = require('express-cookies');

var app = express();
app.use(expressCookies());

app.get('/', function(req, res) {
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies);

    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies);
});

app.listen(8080);

// curl command that sends an HTTP request with two cookies
// curl http://127.0.0.1:8080 --cookie "Cho=Kim;Greet=Hello"
```

### [MIT Licensed](LICENSE)
