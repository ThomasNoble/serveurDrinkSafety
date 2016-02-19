var mongoose = require('mongoose');

module.exports = function(app){
    app.mongoose = mongoose.connect(app.settings.db);

    app.models = {};
    app.models.Users = require('./Users')(app);
    app.models.Contact = require('./Contact')(app);
    app.models.Conso = require('./Conso')(app);
};