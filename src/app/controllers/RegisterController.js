const User = require('../models/Login')


class RegisterController {


    index(req,res)
    {
        res.render('register')
    }   

    //[GET METHOD] /Register
    creater(req,res) {
        const creater = {"username":req.body.username ,"password": req.body.password2}
       
        const user = new User(creater)
        user.save(function(err) {
            if(!err)
            {
                res.redirect('/')
            }
            else {res.redirect('back')}
        })
       
    }


}

module.exports = new RegisterController;