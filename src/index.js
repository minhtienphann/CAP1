// Khai bao thu vien
const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const route = require('./routes');
session = require('express-session');
const app = express();
const port = 4000;


app.use(session({
  secret: 'abcdefg',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.use(express.static(path.join(__dirname, "public")))

// use thu vien
//app.use(morgan('combined'));


app.engine('handlebars',handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources\\views'));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

route(app);

// app.get('/', function (req,res) {
//     res.render('home')
// });


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });