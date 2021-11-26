const config = require('../../config/db/index');
const sql = require('mssql');


class RegisterController {

    //[GET METHOD] /Register
    index(req,res)
    {
        res.render('register');
    }   

    registing(req,res,next) {
        let username = req.body.username;
        let password1 = req.body.password1;
        let password2 = req.body.password2;
        if(password1==password2)
        {
            console.log('TRUNG KHOP PASSWORD');
            sql.connect(config, function(err) {
                if(err)
                {
                    console.log('LOI KET NOI DB TU REGISTER'+err);
                }
                else
                {
                    console.log('KET NOI DB THANH CONG REGISTER !!!');
                    var request = new sql.Request();
                    request.query(`insert into ACCOUNTUSER (acc_name,password)
                     values('${username}','${password2}')`, function(error) {
                         if(!error)
                         {
                             console.log('DANG KY THANH CONG !!!!');
                             res.redirect('/login');
                         }
                         else{
                             console.log('DANG KY THAT BAI !!!'+error);
                         }
                     })
                }
            })
        }
        else
        {
            res.send('Mat khau 2 chua chinh xac');
        }
    }
}

module.exports = new RegisterController;