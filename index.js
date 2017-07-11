var express=require('express');
var fs=require('fs');
var app=express();
var item=require('./dist/item.json');

app.use(express.static('dist'));

console.log(1);

app.get('/',function(req,res){
	console.log("welcome to main view");
	res.sendFile(__dirname+"/"+"index.html");
})

app.get('/process_get',function(req,res){
	var suc=0;
	var response={
		"username":req.query.username,
		"password":req.query.password
	}
	console.log(response);
	for(var i in item.user){
		if(item.user[i].username.toString()===response.username&&item.user[i].password.toString()===response.password){
			suc=1;
		}
	}
	console.log(JSON.stringify(item));
	console.log(suc);
	res.end(JSON.stringify(suc));
})

app.get('/process_Register',function(req,res){
	var suc=1;
	var response={
		"username":req.query.username,
		"password":req.query.password
	}
	console.log(response);
	for(var i in item.user){
		if(item.user[i].username.toString()===response.username&&item.user[i].password.toString()===response.password){
			suc=0;
			break;
		}
	}
	res.end(JSON.stringify(suc));
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})