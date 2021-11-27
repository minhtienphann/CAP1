const config = require('./index');
const sql = require('mssql');
exports.autoSetID =  function (username) {
    let temp = '';
    sql.connect(config, function(err) {
        if(!err)
        {
            var request = new sql.Request();
            var queryy = 'select COUNT(acc_id) as id from ACCOUNTUSER';
            request.query(queryy, function(error, result) {
                if(!error)
                {
                    return username+result.recordset[0].id;
                }
            })
        }
    })
}