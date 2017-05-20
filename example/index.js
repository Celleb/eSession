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