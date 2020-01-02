var express = require ('express');
var app = express();
var port = 3000;

var middleWare={
	requireAuthentication: function(req,res,next) {
		console.log('private Route hit');

	},
	logger: function(req,res,next) {
		console.log('Request'+ new Date().toString()+' '+req.method+' '+req.originalUrl);
		next();
	}
};
app.use(middleWare.logger);

app.get('/about',app.use,middleWare.requireAuthentication,function(req,res) {
	res.send("About Us!");
})
app.use(express.static(__dirname + '/public'));
app.listen(port,function() {
	console.log("express server started on port "+ port +"!!");
});
