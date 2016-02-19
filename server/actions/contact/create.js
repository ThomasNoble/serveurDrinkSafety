module.exports = function(app) {
    return function(req, res, next){
        var contact = new app.models.Contact({
            user: req.body.user,
            nom: req.body.nom,
            numero: req.body.numero

        });

        contact.save(function(err, instance){
            if(err)
                return res.status(500).send(err);
            res.send(instance);
        })
    }
};