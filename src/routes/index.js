
const homeRouter = require('./home');
const loginRouter = require('./login');
const registerRouter = require('./register');
const accountRouter = require('./account');
const Authentication = require('../config/authen')
const adminRouter = require('./admin');


function route(app) {

  // app.use(session({
  //   secret: 'abcdefg',
  //   resave: true,
  //   saveUninitialized: true,
  //   cookie: { maxAge: 60000 }
  // }));
    app.use('/admin',Authentication.requireAthu,adminRouter);
    app.use('/account',Authentication.requireAthu,accountRouter);
    app.use('/login',loginRouter);
    app.use('/register',registerRouter);
    app.use('/',homeRouter);

};

module.exports  = route;