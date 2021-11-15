// const User = require('../models/Login')


class RegisterController {

    //[GET METHOD] /Register
    index(req,res)
    {
        res.render('register');
    }   

    


}

module.exports = new RegisterController;