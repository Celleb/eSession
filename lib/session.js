let session = require('express-session');
let redisStore = require('connect-redis')(session);
module.exports = {
    initialize: (app, options = {
        allowAllOrigins: false
    }) => {
        app.use(session(options.sessionOpts || {
            secret: "sectedballot",
            name: 'expression',
            cookie: {
                sameSite: false,
                maxAge: (3600000 * 24)
            },
            saveUninitialized: false,
            resave: true
        }));
        app.all('*', (req, res, next) => {
            if (options.allowAllOrigins) {
                res.header("Access-Control-Allow-Origin", req.get("origin"));
            }
            res.header("Access-Control-Allow-Credentials", true);
            next();
        });
    }
}