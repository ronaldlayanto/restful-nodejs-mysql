var mysql = require('mysql');
var connection = mysql.createPool({

    host:'localhost',
    user:'oomph_user',
    password:'password',
    database:'restful_db',
    port:3307

});
module.exports=connection;
