const config = require('../../config/db/index');
const sql = require('mssql');
const userMD = require('../../config/Model/User');
const bcrypt = require('bcrypt');



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
        let hash_pass = '';
        if(password1==password2)
        {
            bcrypt.hash(password2,5,function(err,result){
                if(!err)
                {
                    hash_pass = result;
                }
            })
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
                            var temp = result.recordset[0].id;
                            ID = username + temp;
                                request.query(`insert into ACCOUNTUSER (acc_id,user_name,password,role_id)
                                values('${ID}','${username}','${hash_pass}','${role_id}')`, function(error) {
                                    if(!error)
                                    {
                                        console.log('DANG KY THANH CONG !!!!');
                                        res.cookie('accID',ID, {maxAge: 500000})
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
       var acc_id = req.cookies.accID;
       sql.connect(config, function(err) {
           if(err)
           {
               console.log('KET NOI DB FALSE !!!!');
           }
           else
           {

               var request = new sql.Request();
               request.query(`select COUNT(user_id) as id from USERR`, function(errors, result) {
                   if(errors)
                   {
                       console.log('Loi KET NOI DB !!!'+errors)
                   }
                   else
                   {
                        user.setid = req.body.full_name + result.recordset[0].id;;
                        user.setfull_name = req.body.full_name;
                        user.setphone = req.body.phone_number;
                        user.setsex = req.body.sex;
                        user.setbirth_date = req.body.year;
                        user.setemail = req.body.email;
                        user.setsub_district = req.body.phuong;
                        user.setdistrict = req.body.quan;
                        user.setcity = req.body.thanhpho;
                        user.setstreet = req.body.diachi;
                        request.query(`insert into USERR (user_id,acc_id,full_name,date_of_birth,
                            sex,phone_number,email,sub_district,district,city,address)
                            values('${user.getid}','${acc_id}','${user.getfull_name}','${user.getbirth_date}',
                            '${user.getsex}','${user.getphone}','${user.getemial}','${user.getsub_district}',
                            '${user.getdistrict}','${user.getcity}','${user.getstreet}') `, 
                            function(error)
                            {
                                if(error)
                                {
                                    console.log('CAP NHAT THONG TIN NGUOI DUNG THAT BAI !!!'+error);
                                    res.clearCookie('accID');
                                }
                                else
                                {
                                    console.log('CAP NHAT THANH CONG');
                                    res.redirect('/account');
                                }
                            })
                   }
               })
              
           }
       })
    }

    
}
    


module.exports = new RegisterController;