var express=require('express');
var app=express();
var viewPath=__dirname+"/views/";
app.use(express.static('public'));
app.set('views engine','ejs');
app.set('views',__dirname+'/views');

app.get('/index.ejs',function (req,res) {
    var XiezDao=require('./dao/XiezDao');
    var xiezDao=new XiezDao();
    xiezDao.init();
    xiezDao.query(function (data) {
        // console.log(data);
        res.render('index',{xiez:data});
    })

});

app.get('/single.ejs',function(req,res){
    var id=req.query.id;
    var SingleDao=require('./dao/SingleDao');
    var singleDao=new SingleDao();
    singleDao.init();
    singleDao.query(id,function(data){
        console.log(data);
        res.render('single',{single:data})
    })

});

app.get('/account.ejs',function(req,res){

    res.render('account',{})
});

app.get('/contact.ejs',function(req,res){

    res.render('contact',{})
});

app.get('/register.ejs',function(req,res){

    res.render('register',{})
});

app.get('/product.ejs',function(req,res){

    res.render('product',{})
});




var server = app.listen(8888,function () {
    console.log('欢迎访问端口号：8088');
})