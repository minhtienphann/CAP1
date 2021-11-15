
const homeRouter = require('./home');
const loginRouter = require('./login');
const registerRouter = require('./register');
const accountRouter = require('./account');




function route(app) {

    app.use('/account',accountRouter);
    app.use('/login',loginRouter);
    app.use('/register',registerRouter);
    app.use('/',homeRouter);

};

module.exports  = route;