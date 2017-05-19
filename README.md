# expression-js
Sets up express-session using redis (connect-redis)

## Getting Started
- Download and install redis https://redis.io/download
- Install expression-js
 
         npm install expression-js

### Example

```javascript
'use strict'
let express = require('express');
let app = express();
let session = require('../lib/session');
let bodyParser = require('body-parser'); //body parser and json handler
let multer = require('multer');
session.initialize(app);
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
app.use(bodyParser.urlencoded({
        extended: true
    }))
    .use(bodyParser.json());
app.listen(3010, function() {
    console.info('running at 3010');
});