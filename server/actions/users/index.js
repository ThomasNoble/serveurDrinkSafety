module.exports = function(app){
    return {
        create: require('./create')(app),
        list: require('./list')(app),
        remove: require('./remove')(app),
        show: require('./show')(app),
        connect: require('./connect')(app),
        update: require('./update')(app)
    };
};