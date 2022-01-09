const config = require('../../config/db/index');
const userMD = require('../../config/Model/User')
const sql = require('mssql');



class AdminController {


    //[GET METHOD] /Home
    index(req,res,next) {
        if(req.cookies.accID != null)
        {
            var acc_id = req.cookies.accID;
        }
        else{
            console.log('COOKIES SAVE ERROR IN ADMIN!!!');
        }
        var tempuser = {} ;
        var tempAdmin = {} ;
        var acc_id = 'admin0';
        
        var sum={};
        var Give;
        var Take;
        var User;
        var Done = 0;
        sum['done'] = Done;
        var sumTraffic;
        sql.connect(config,function(err){
            if(!err)
            {
                let requestadmin = new sql.Request();
                requestadmin.query(`select * from ADMIN where acc_id='${acc_id}'`,function(error,result) {
                    if(!error)
                    {
                        for(var i = 0 ; i<result.recordsets.length; i++)
                        {
                           tempAdmin[i] = result.recordset[i];
                        }
                    }
                    else
                    {
                        console.log('FALSE TO QUERY ADMIN !!!!'+error);
                    }
                })
            }
            else
            {
                console.log('CONNECT DB FALSE IN ADMIN !!!'+err);
            }
            var requestUser = new sql.Request();
            requestUser.query(`select * from USERR`,function(error,results) {
                if(!error)
                {
                     
                     for(var i = 0 ; i<=results.recordset.length; i++)
                     {
                        tempuser[i] = results.recordset[i];
                     }
                }
                else
                {
                    console.log('FALSE QUERY USERR IN ADMIN'+error)
                }
            })

            // LAY TONG SO NGUOI DUNG
            var requestSumUser = new sql.Request();
            requestSumUser.query(`select COUNT(acc_id) as sum from USERR`, function(error,result){
                if(!error)
                {
                     User = result.recordset[0].sum;
                     sum['user'] = User;
                    
                }
                else
                {
                    console.log('QUERY FALSE SUMUER IN ADMIN'+error)
                }
            })

            // LAY TONG SO NGUOI CHO
            var requestGive = new sql.Request();
            requestSumUser.query(`select COUNT(acc_id) as sum from USERR where status like 'muon cho'`, function(error,result){
                if(!error)
                {
                     Give = result.recordset[0].sum;
                     sum['give'] = Give;
                    
                }
                else
                {
                    console.log('QUERY FALSE SUMUER IN ADMIN'+error)
                }
            })

            // LAY TONG SO NGUOI NHAN
            var requestSumUser = new sql.Request();
            requestSumUser.query(`select COUNT(acc_id) as sum from USERR where status like 'muon nhan'`, function(error,result){
                if(!error)
                {
                     Take = result.recordset[0].sum;
                     sum['take'] = Take;
                    
                }
                else
                {
                    console.log('QUERY FALSE SUMUER IN ADMIN'+error)
                }
            })
        })
       
        res.render('admin',{tempuser,tempAdmin,sum})
        
        // res.send(tempuser)
    }


    update(req,res) {
        var updateUser = new userMD.User();
        updateUser.setfull_name = req.body.name;
        updateUser.setphone = req.body.phone;
        updateUser.setsex = req.body.sex;
        updateUser.setbirth_date = req.body.year;
        updateUser.setcity = req.body.tinh;
        updateUser.setdistrict = req.body.quan;
        updateUser.setsub_district = req.body.phuong;
        updateUser.setstreet = req.body.diachi;
        var request1 = new sql.Request();
        if(updateUser.getbirth_date.length < 0) {
          request1.query(`update USERR set full_name='${updateUser.getfull_name}',
          phone_number='${updateUser.getphone}',sex='${updateUser.getsex}',date_of_birth='${updateUser.getbirth_date}',
          sub_district='${updateUser.getsub_district}',district='${updateUser.getdistrict}',city='${updateUser.getcity}',
          address='${updateUser.getstreet}' where `,function(err) {
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
          district='${updateUser.getdistrict}',city='${updateUser.getcity}',address='${updateUser.getstreet}'`,function(err) {
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

    //[GET] FIND USER
    // find(req,res) {
    //     var tempb = '';
    //     var temp = req.query.findName;
    //     sql.connect(config,function(err) {
    //         if(!err)
    //         {
    //             var request = new sql.Request();
    //             request.query(`select * from USERR where full_name like '${temp}'`,function(err,result){
    //                 if(!err)
    //                 {
    //                     tempb = result.recordset[0];
    //                     res.redirect('/admin')
    //                 }
    //                 else
    //                 {
    //                     console.log("LOI FIND !!!" + err)
    //                 }
    //             })
    //         }
    //         else
    //         {
    //             console.log('ERR !!!' + err);
    //         }
            
    //     })
        
    // }
   
}

module.exports = new AdminController;