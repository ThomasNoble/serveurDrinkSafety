module.exports = function(app) {
    return function(req, res, next){
        var users = new app.models.Users({
            login: req.body.login,
            password: req.body.password,
            poids: req.body.poids,
            sexe: req.body.sexe,
            mail: req.body.mail,
            age: req.body.age,
            prenom: req.body.prenom,
            nom: req.body.nom

        });

        users.save(function(err, instance){
            if(err)
                return res.status(500).send(err);
            res.send(instance);
        })
    }
};
