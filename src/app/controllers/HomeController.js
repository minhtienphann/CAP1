const config = require('../../config/db/index');
const sql = require('mssql');



class HomeController {

    
     

    //[GET METHOD] /Home
    index(req,res) {
       res.render('home')
    }
   

    give(req,res) {
        var description = "";
        description = 'Khau Trang: '+ req.body.khautrang + '\nRau Củ: ' + req.body.raucu + '\nGạo: ' + req.body.gao +
        '\nMì Gói: ' + req.body.migoi + '\nSữa: ' + req.body.sua + '\nTrứng' + req.body.trung + '\nXe tải 4 Tấn: ' + req.body.xe4tan + '\nXe Tải 2 Tấn: ' + req.body.xe2tan + '\nGhi Chú : ' + req.body.comment;
        if(req.cookies.accID == null)
        {
            res.redirect('/login');
        }
        else
        {
            var id = req.cookies.accID;
            sql.connect(config, function(error) {
                if(!error)
                {
                    let request = new sql.Request();
                    request.query(`update USERR set description='${description}', status='Muon Cho' where acc_id='${id}'`,
                    function(err,result) {
                        if(!err)
                        {
                            console.log('Update Thanh Cong !!!' + result);
                            res.redirect('/account');
                        }
                        else
                        {
                            console.log('UPDATE FALSE !!!' + err)
                            res.redirect('/');
                        }
                    })
                }
                else
                {
                    console.log('CONNECT FALSE IN GIVE !!!' + error);
                }
            })
        }
    }

    take(req,res) {
        var description = "";
        description ='So Ho Can Nhan: '+ req.body.soho + 'Khau Trang: '+ req.body.khautrang + 'Rau Củ: ' + req.body.raucu + 'Gạo: ' + req.body.gao +
        'Mì Gói: ' + req.body.migoi + 'Sữa: ' + req.body.sua + 'Trứng' + req.body.trung + 'Ghi Chu: ' + req.body.comment;
        if(req.cookies.accID == null)
        {
            res.redirect('/login');
        }
        else
        {
            var id = req.cookies.accID;
            sql.connect(config, function(error) {
                if(!error)
                {
                    let request = new sql.Request();
                    request.query(`update USERR set description='${description}', status='Muon Nhan' where acc_id='${id}'`,
                    function(err,result) {
                        if(!err)
                        {
                            console.log('Update Thanh Cong !!!' + result);
                            res.redirect('/account');
                        }
                        else
                        {
                            console.log('UPDATE FALSE !!!' + err)
                            res.redirect('/');
                        }
                    })
                }
                else
                {
                    console.log('CONNECT FALSE IN GIVE !!!' + error);
                }
            })
        }
    }
}

module.exports = new HomeController;