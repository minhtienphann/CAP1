const config = require('../../config/db/index');
const sql = require('mssql');
const bcrypt = require('bcrypt');




class LoginController {

    //[posy METHOD] /Login
    index(req, res) {
      res.render('login');
    }

    login (req, res, next) {
      sql.connect(config, function (err) {
              if(!err)
              {
                console.log('CONNECT DB SUCCESSFULL!!!!');
                var user = req.body.username;
                var password = req.body.password; 
                var request = new sql.Request();
                var tempa = '';
                tempa = user;
                var tempb = tempa.slice(0,5);
                if(tempb == 'admin')
                {
                      var requests = new sql.Request();
                      requests.query(`select * from ACCOUNTADMIN where acc_id='${tempa}';`, function(error,result){
                        if(!error)
                        {
                          if(result.recordset[0] != null)
                          {
                            var temp = '';
                            temp = result.recordset[0].password;
                            temp = temp.slice(0,temp.indexOf(' '));
                            // let pass_db = temp.password;
                            // let kp = bcrypt.compare(password,pass_db);
                            if(temp == password)
                            {
                              console.log('LOGIN ADMIN SUCCESSFULL!!!!');
                              res.cookie('accID',result.recordset[0].acc_id, {maxAge: 500000})
                              res.redirect('/admin');
                            }
                            else{
                              res.redirect('back');
                              console.log('Mat Khau Chua Chinh Xac');
                            }
                          }
                          else{
                            res.redirect('back')
                            console.log('Tai Khoan Khong Ton Tai');
                          }
                        }
                        else{
                          console.log('Truy Xuat Loi (Login) : '+error)
                        }
                      })
                    
                  }
                else
                {
                 var request = new sql.Request();
                 request.query(`select * from ACCOUNTUSER where user_name='${user}'`, function(error,User){
                  if(!error)
                  {
                    console.log('QUERY SUCCESSFUL (LogIN) !!!');
                      if(User.recordset[0] != null)
                      {
                        var temp = '';
                        temp = User.recordset[0].password;
                        temp = temp.slice(0,temp.indexOf(' '))
                        let pass_db = temp;
                        let kq = bcrypt.compare(password,pass_db);
                        if(kq)
                        {
                          console.log('LOGIN SUCCESSFULL!!!!');
                          res.cookie('accID',User.recordset[0].acc_id, {maxAge: 500000})
                          res.redirect('/account');
                        }
                        else
                        {
                          console.log('Mat Khau Sai');
                          res.redirect('back')
                        }
                      }
                      else{
                        res.redirect('/register')
                      }
                      
                  }
                  else
                  {
                    console.log('QUERY FALSE !!!!' + err);
                    res.redirect('/login');
                  }
                });
              }
            }
              else
              {
                  console.log(`FALSE TO CONNECT DATA !!!!! ${err}`);
              }
        });
     }

    logout(req,res, next) {
      if(req.cookies.accID != null)
      {
        res.clearCookie('accID');
        res.redirect('/')
      }
      else
      {
        res.redirect('/')
      }
  } 
}

module.exports = new LoginController;