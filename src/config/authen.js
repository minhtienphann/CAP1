module.exports.requireAthu = function (req,res, next){
    if(req.cookies.userID == null)
    {
        res.redirect('/login')
    }
    else{
        next();
    }
}


