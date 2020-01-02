var express = require ('express');
var app = express();
var port = 3000;

var middleWare=require('./middleware.js');

app.use(middleWare.logger);

app.get('/about',app.use,middleWare.requireAuthentication,function(req,res) {
	res.send("About Us!");
})
app.use(express.static(__dirname + '/public'));
app.listen(port,function() {
	console.log("express server started on port "+ port +"!!");
});
