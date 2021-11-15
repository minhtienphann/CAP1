const config = require('../../config/db/index');

class AccountController {


     

    //[GET METHOD] /Home
    index(req,res) {
        res.render('account');
    }
}

module.exports = new AccountController;