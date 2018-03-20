function XiezDao() {
    var connection;
    this.init=function(){
        var mysql=require('mysql');
        connection=mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'root',
            port:'3306',
            database:'db_xiez'
        });
        connection.connect();
    }
    this.query=function (callback) {
        var sql='select t_xiez.xiezid,t_xiez.singleid,t_xiez.xiezname,t_xiez.introduce,t_xiez.price,t_xiez.url from t_xiez';
        connection.query(sql,function (err,result) {
            if(!err){
                callback(result);
            }else {
                console.log(err.message);
            }
        });
    }

}

module.exports=XiezDao;