const User = require('../models/Login')


class LoginController {

    //[GET METHOD] /Login
    index(req,res) {
        if(!req.session.daDangNhap)
            {
                res.render('login',{
                    keylog: 'true'
                })
            }
        else
            {
                res.render
            }  
    }


    //[POST METHOD] /Login
    login(req,res) {
       User.findOne({username: req.body.username}, function(err, user) {
           if(user != null)
           {
            if(user.password != null && user.password ==  req.body.password)
            {
                
                var sess = req.session;  //initialize session variable
                sess.daDangNhap = true;
                sess.username = user.username;     
                res.redirect('/')
              
            }
            else
            {
                 res.redirect('back')
            }
           }
           else {res.redirect('back')}
          
       })
        
    }
}

module.exports = new LoginController;