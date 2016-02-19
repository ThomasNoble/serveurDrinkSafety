module.exports = function(app){
    app.use('/api/users', require('./users')(app));
    app.use('/api/contact', require('./contact')(app));
    app.use('/api/conso', require('./conso')(app));
};