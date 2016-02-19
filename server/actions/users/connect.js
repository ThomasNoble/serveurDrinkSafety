module.exports = function(app){
    return function(req, res, next){
        console.log(req.params);
        app.models.Users.findOne({
            login: req.params.login,
            password: req.params.password
        }, function(err, instance){
            if(err)
                return res.status(500).send(err);

            if(!instance)
                return res.status(404).send('account not found.');

            res.send(instance);
        })
    };
};