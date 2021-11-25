const config = require('../../config/db/index');
const sql = require('mssql');



class HomeController {

    
     

    //[GET METHOD] /Home
    index(req,res) {
        res.render('home',{username:''});
    }
   
}

module.exports = new HomeController;