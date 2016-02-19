module.exports = function(app) {
    return function(req, res, next){
        var conso = new app.models.Conso({
            user: req.body.user,
            marque: req.body.marque,
            degre: req.body.degre,
            volume: req.body.volume,
            date: req.body.date

        });

        conso.save(function(err, instance){
            if(err)
                return res.status(500).send(err);
            res.send(instance);
        })
    }
};