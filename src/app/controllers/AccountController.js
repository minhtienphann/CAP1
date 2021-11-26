const config = require('../../config/db/index');
const sql = require('mssql');
const userMD = require('../../config/Model/User')

class AccountController {


     

    //[GET METHOD] /Home
    index(req, res) {
        sql.connect(config, function(err) {
          if(!err)
          {
            var userID = req.cookies.userID;
            console.log('SUCCESSFULL!!!!');
            var request = new sql.Request();
            request.query(`select * from USERR where USERR.acc_id = ${userID}`, 
            function(error, result) {
              if(!error)
              {
                console.log('SUCCESSFULL ACCOUNT');
                var users = new userMD.User();
                var temp = result.recordset[0];
                users.setfull_name = temp.full_name;
                users.setphone = temp.phone_number;
                users.setsex = temp.sex;
                users.setbirth_date = temp.date_of_birth;
                users.setemail = temp.email;
                users.street = temp.street;
                res.render('account',{users})
              }
              else
              {
                console.log('LOI TRUY XUAT TAI KHOAN : '+error);
              }
            })
          }
          else{
            console.log(err);
          }
        });
    }

    // login(res, req) {
        
    // }
}

module.exports = new AccountController;