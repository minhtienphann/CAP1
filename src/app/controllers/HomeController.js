const config = require('../../config/db/index');
const sql = require('mssql');
const setID = require('../../config/db/setid');



class HomeController {

    
     

    //[GET METHOD] /Home
    index(req,res) {
        res.render('home');
    }
   
}

module.exports = new HomeController;