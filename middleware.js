
	var middleWare={
	requireAuthentication: function(req,res,next) {
		console.log('private Route hit');

	},
	logger: function(req,res,next) {
		console.log('Request'+ new Date().toString()+' '+req.method+' '+req.originalUrl);
		next();
	}
};

module.exports=middleWare;