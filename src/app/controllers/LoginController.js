// const User = require('../models/Login')


class LoginController {

    //[GET METHOD] /Login
    index(req,res) {
      res.render('login');
    }


}

module.exports = new LoginController;