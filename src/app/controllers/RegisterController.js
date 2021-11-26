const config = require('../../config/db/index');
const sql = require('mssql');


class RegisterController {

    //[GET METHOD] /Register
    index(req,res)
    {
        res.render('register');
    }   

    show(req,res,next) {
        res.render('userinfor', {layout: false});
    }
    // registing(req,res) {
    //     let username = req.body.username;
    //     let password1 = req.body.password1;
    //     let password2 = req.body.password2;
    //     if(password1==password2)
    //     {
    //         sql.connect(config, function(err) {
    //             if(err)
    //             {
    //                 console.log('LOI KET NOI DB TU REGISTER'+err);
    //             }
    //             else
    //             {
    //                 var request = new sql.Request();
    //                 request.query(request.template`insert into ACCOUNTUSER (acc_name,password)
    //                  values(${username},${password2})`, function(error) {
    //                     if(error)
    //                     {
    //                         console.log('register loi: '+error);
    //                     }
    //                     else
    //                     {
    //                         res.redirect('/login');
    //                     }
    //                 })
    //             }
    //         })
    //     }
    //     else
    //     {
    //         res.send('Mat khau 2 chua chinh xac');
    //     }
        
    // }
    


}

module.exports = new RegisterController;