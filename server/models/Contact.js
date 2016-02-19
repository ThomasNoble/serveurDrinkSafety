module.exports = function(app){
    var ContactSchema = app.mongoose.Schema({
        user: {
            type : app.mongoose.Schema.ObjectId,
            ref : 'Users',
            required: true
        },
        nom: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required: true
        }
    });

    ContactSchema.plugin(require('mongoose-timestamp'));

    var Contact = app.mongoose.model('Contact', ContactSchema);
    return Contact;
};