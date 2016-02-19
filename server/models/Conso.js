module.exports = function(app){
    var ConsoSchema = app.mongoose.Schema({
        user: {
            type : app.mongoose.Schema.ObjectId,
            ref : 'User',
            required: true
        },
        marque: {
            type: String,
            required: true
        },
        degre: {
            type: String,
            required: true
        },
        volume: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        }
    });

    ConsoSchema.plugin(require('mongoose-timestamp'));

    var Conso = app.mongoose.model('Conso', ConsoSchema);
    return Conso;
};