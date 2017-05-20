# expression-js

Sets up express-session using redis (connect-redis)
Express-session stores session data on the server.
A cookie with an ID identifies which session data to use.

## Getting Started

- Download and install redis https://redis.io/download
- Install expression-js

```bash
npm install expression-js
```

## Usage

### Entry or index script

```js
let express = require('express');
let app = express();
let session = require('expression-js');
session.initialize(app); //using the default options
```

### Storing to session

```js
app.get('/', (req, res, next) => {
    req.session.data = {
        username: 'Username',
        userID: 'userID',
        admin: true
    }
});
```

### Reading from session

```js
app.get('/path', (req, res, next) => {
    res.json({message: 'You are logged in ass'+req.session.data.username});
})
```

## Options

### Default options

```js
 {
    allowAllOrigins: false,
    sessionOpts: {
        secret: "sectedballot",
        name: 'expression',
        cookie: {
            sameSite: false,
            maxAge: (3600000 * 24)
        },
        saveUninitialized: false,
        resave: true
    }
```

- *allowAllOrigins* if set to true, will rewrite the _Access-Control-Allow-Origin_ to the requesting origin. It is required for the session to work over CORS.
- *sessionOpts* expression-session options.

## Example

```javascript
let express = require('express');
let app = express();
let session = require('expression-js'); // require expression js
let options = {
    allowAllOrigins: false,
    sessionOpts: {
        secret: "sectedballot",
        name: 'expression',
        cookie: {
            sameSite: false,
            maxAge: (3600000 * 24)
        },
        saveUninitialized: false,
        resave: true
    }
}
session.initialize(app, options); // initialize express to expression-js
app.get('/', (req, res, next) => {
    if (req.session && req.session.data) {
        res.json(req.session.data);
    } else {
        req.session.data = {
            session: 'Good one'
        }
        res.json({ message: 'Session started' });
    }
});
app.listen(3010, function() {
    console.info('running at 3010');
});
```