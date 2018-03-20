function SingleDao() {
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
    this.query=function (id,callback) {
        var sql='select * from single join image on single.singleid=image.singleid where single.singleid= '+id;
        connection.query(sql,function (err,result) {
            if(!err){
                callback(result);
            }else {
                console.log(err.message);
            }
        });
    }
}

module.exports=SingleDao;