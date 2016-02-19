var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function(app){
    router.post('/',
        bodyparser,
        app.actions.conso.create
    );

    router.get('/',
        app.actions.conso.list
    );

    router.get('/:id',
        app.actions.conso.show
    );

    router.delete('/:id',
        app.actions.conso.remove
    );

    return router;
};
