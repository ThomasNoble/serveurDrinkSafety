var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function(app){
    router.post('/',
        bodyparser,
        app.actions.contact.create
    );

    router.get('/',
        app.actions.contact.list
    );

    router.get('/:id',
        app.actions.contact.show
    );

    router.delete('/:id',
        app.actions.contact.remove
    );

    return router;
};
