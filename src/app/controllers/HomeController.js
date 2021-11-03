

class HomeController {

    //[GET METHOD] /Home
    index(req,res) {
        res.render('home')
    }
}

module.exports = new HomeController;