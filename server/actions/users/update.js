module.exports = function(app) {
    return function(req, res, next){
        //console.log(app.models);

        var updt ={};
        if (req.body.hasOwnProperty("poids")){
            updt.poids = req.body.poids;
        }
        if (req.body.hasOwnProperty("sexe")){
            updt.sexe =req.body.sexe;
        }
        if (req.body.hasOwnProperty("mail")){
            updt.mail =req.body.mail;
        }
        if (req.body.hasOwnProperty("age")){
            updt.age =req.body.age;
        }
        if (req.body.hasOwnProperty("prenom")){
            updt.prenom =req.body.prenom;
        }
        if (req.body.hasOwnProperty("nom")){
            updt.nom =req.body.nom;
        }
        return app.models.Users
            .findByIdAndUpdate(
                req.params.id
                ,
                {}.$set = updt
                ,
                function(err, instances){
                    if(err)
                        return res.status(500).send(err);

                    res.send(instances);
                })
    }
};