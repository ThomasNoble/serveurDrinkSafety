module.exports = function(app) {
    return function(req, res, next){
    	return app.models.Users
    		.find(function(err, instances){
    			if(err)
    				return res.status(500).send(err);

    			res.send(instances);
    		})
    }
};