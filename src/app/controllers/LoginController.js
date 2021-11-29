const config = require('../../config/db/index');
const sql = require('mssql');




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
                request.query(`select * from ACCOUNTUSER where user_name='${user}' and password='${password}'`, function(error,User){
                  if(!error)
                  {
                      console.log('LOGIN SUCCESSFULL!!!!');
                      res.cookie('userID',User.recordset[0].acc_id, {maxAge: 500000})
                      res.redirect('/account');
                  }
                  else
                  {
                    console.log('LOGIN FALSE !!!!' + err);
                    res.redirect('/login');
                  }
                });
              }
              else
              {
                  console.log(`FALSE TO CONNECT DATA !!!!! ${err}`);
              }
          });
    }

    logout(req,res, next) {
      if(req.cookies.userID != null)
      {
        res.clearCookie('userID');
        res.redirect('/')
      }
      else
      {
        res.redirect('/')
      }
  } 
}

module.exports = new LoginController;