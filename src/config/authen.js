const config = require('../config/db/index');
const sql = require('mssql');
module.exports.requireAthu = function (req,res, next){
    if(req.cookies.userID == null)
    {
        res.redirect('/login');
    }
    else{
        next()
    }
}


