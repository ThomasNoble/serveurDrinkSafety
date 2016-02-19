module.exports = function(app){
    var UsersSchema = app.mongoose.Schema({
        login: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        poids: {
            type: String,
            default : ""
        },
        sexe: {
            type: String,
            default : ""
        },
        mail: {
            type: String,
            default : ""
        },
        age: {
            type: String,
            default : ""
        },
        prenom: {
            type: String,
            default : ""
        },
        nom: {
            type: String,
            default : ""
        }



    });

    UsersSchema.plugin(require('mongoose-timestamp'));

    var Users = app.mongoose.model('Users', UsersSchema);
    return Users;
};