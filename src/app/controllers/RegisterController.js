const config = require('../../config/db/index');
const sql = require('mssql');
const userMD = require('../../config/Model/User');
const { request } = require('express');


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
                            ID = username + result.recordset[0].id
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

    infor(req,res) {
        res.render('userinfor');
      }
  
    

    addinfor(req,res) {
       var user = new userMD.User();
       user.setfull_name = req.body.full_name;
       user.setphone = req.body.phone_number;
       user.setsex = req.body.sex;
       user.setbirth_date = req.body.year;
       user.setemail = req.body.email;
       user.setstreet = req.body.diachi;
       console.log = user.getfull_name;
       res.send(user.sex);
    //    sql.connect(config, function(err) {
    //        if(err)
    //        {
    //            console.log('KET NOI DB FALSE !!!!');
    //        }
    //        else
    //        {
    //            request = new sql.Request();
    //            request.query(``)
    //        }
    //    })
    }

    
}
    


module.exports = new RegisterController;