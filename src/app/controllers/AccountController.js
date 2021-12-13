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
                  users.setstatus = temp.status;
                  users.street = temp.address;
                  users.setdesciption = temp.description;
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



    update(req,res) {
      var acc_id = '';
      acc_id = req.cookies.accID;
      var updateUser = new userMD.User();
      updateUser.setfull_name = req.body.name;
      updateUser.setphone = req.body.phone;
      updateUser.setsex = req.body.sex;
      updateUser.setbirth_date = req.body.year;
      updateUser.setcity = req.body.tinh;
      updateUser.setdistrict = req.body.quan;
      updateUser.setsub_district = req.body.phuong;
      updateUser.setstreet = req.body.diachi;
      sql.connect(config,function(error){
        if(!error)
        {
          var request1 = new sql.Request();
          if(updateUser.getbirth_date.length < 0) {
            request1.query(`update USERR set full_name='${updateUser.getfull_name}',
            phone_number='${updateUser.getphone}',sex='${updateUser.getsex}',date_of_birth='${updateUser.getbirth_date}',
            sub_district='${updateUser.getsub_district}',district='${updateUser.getdistrict}',city='${updateUser.getcity}',
            address='${updateUser.getstreet}' where acc_id='${acc_id}}'`,function(err) {
              if(!err)
              {
                res.redirect('back');
                console.log('UPDATE THANH CONG USERINFOR');
              }
              else
              {
                console.log('UPDATE THAT BAI 1 !!!'+err);
                res.send('FALSE UPDATE !!!');
              }
            })
          }
          else
          {
            var request2 = new sql.Request();
            request2.query(`update USERR set full_name='${updateUser.getfull_name}',
            phone_number='${updateUser.getphone}',sex='${updateUser.getsex}',sub_district='${updateUser.getsub_district}',
            district='${updateUser.getdistrict}',city='${updateUser.getcity}',address='${updateUser.getstreet}'  where acc_id='${acc_id}'`
            ,function(err) {
              if(!err)
              {
                console.log('UPDATE THANH CONG');
                res.redirect('back');
              }
              else
              {
                console.log('UPDATE THAT BAI 2 !!!'+err)
                res.send('UPDATE THATBAI');
              }
            })
          }
        }
        else
        {
          console.log('CONNECT THAT BAI !!'+error)
        }
      })
    }
        



    }


module.exports = new AccountController;