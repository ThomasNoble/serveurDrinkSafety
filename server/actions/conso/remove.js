module.exports = function(app) {
    return function(req, res, next){
        app.models.Conso.findOneAndRemove({
                id: req.params.id
            }, function(err, result){
                if(err)
                    return res.status(500).send(err);

                res.send(result);
            });
    }
};