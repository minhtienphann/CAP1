const config = require('../../config/db/index');
const setID = require('../../config/db/setid');
const sql = require('mssql');


class RegisterController {

    //[GET METHOD] /Register
    index(req,res)
    {
        res.render('register');
    }   

    registing(req,res) {
        let ID = 0;
        let role_id = 2;
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
                    var queryy = 'select COUNT(acc_id) as id from ACCOUNTUSER';
                    var request = new sql.Request();
                    request.query(queryy, function(err, result) {
                        if(!err)
                        {
                            ID = ID + result.recordset[0].id
                                request.query(`insert into ACCOUNTUSER (acc_id,user_name,password,role_id)
                                values('${ID}','${username}','${password2}','${role_id}')`, function(error) {
                                    if(!error)
                                    {
                                        console.log('DANG KY THANH CONG !!!!');
                                        res.redirect('/register/infor');
                                    }
                                    else{
                                        console.log('DANG KY THAT BAI !!!'+error);
                                    }
                                }) 
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

    infor(req,res, next) {
        res.render('userinfor',{layout:false});
      }
  
        
}
    


module.exports = new RegisterController;