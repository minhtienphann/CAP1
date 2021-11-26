const config = require('../../config/db/index');
const sql = require('mssql');



class AdminController {

    
     

    //[GET METHOD] /Home
    index(req,res) {
        res.render('admin');
    }
   
}

module.exports = new AdminController;