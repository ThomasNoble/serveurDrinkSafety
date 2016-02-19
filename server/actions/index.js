module.exports = function(app){
    app.actions = {};
    app.actions.users = require('./users')(app);
    app.actions.conso = require('./conso')(app);
    app.actions.contact = require('./contact')(app);
};