const config = require('../../config/db/index');
const sql = require('mssql');
const userMD = require('../../config/Model/User')

class AccountController {


     

    //[GET METHOD] /Home
    index(req, res, next) {
            var accID = req.cookies.accID;
            var temp = '';
            temp = accID;
            temp = temp.slice(0,5)
            if(temp=='admin')
            {
              res.redirect('/admin');
            }
            else
            {
            var request = new sql.Request();
            request.query(`select * from USERR where acc_id='${accID}'`, 
            function(error, result) {
              if(!error)
              {
                console.log('SUCCESSFULL ACCOUNT');
                var users = new userMD.User();
                if(result.rowsAffected != 0)
                {
                  var temp = result.recordset[0];
                  users.setfull_name = temp.full_name;
                  users.setphone = temp.phone_number;
                  users.setsex = temp.sex;
                  users.setbirth_date = temp.date_of_birth;
                  users.setemail = temp.email;
                  users.setdistrict = temp.district;
                  users.setsub_district = temp.sub_district;
                  users.setcity = temp.city;
                  users.street = temp.address;
                  res.render('account',{users})
                }
                else
                {
                  res.send('TAI KHOAN CHUA TON TAI');
                }
              }
              else
              {
                console.log('LOI TRUY XUAT TAI KHOAN : '+error);
                res.redirect('/register/infor')
              }
            })
            }
            
          }
        
      
    }


module.exports = new AccountController;