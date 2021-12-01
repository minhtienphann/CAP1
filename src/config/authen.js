const config = require('../config/db/index');
const sql = require('mssql');
module.exports.requireAthu = function (req,res, next){
    if(req.cookies.accID == null)
    {
        res.redirect('/login');
    }
    else{
       next();
    }
}


