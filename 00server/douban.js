var express = require('express');
var app = express();
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/top250', function (req, res) {
    res.sendFile( __dirname + "/douban/top250.txt" );
})
app.get('/in_theaters', function (req, res) {
    res.sendFile( __dirname + "/douban/in_theaters.txt" );
})
app.get('/us_box', function (req, res) {
    res.sendFile( __dirname + "/douban/us_box.txt" );
})
app.get('/coming_soon', function (req, res) {
    res.sendFile( __dirname + "/douban/coming_soon.txt" );
})


var server = app.listen(8088,function(){
	console.log("8088端口")
})