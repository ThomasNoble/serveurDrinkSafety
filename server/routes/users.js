var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function(app){
   router.post('/',
        bodyparser,
        app.actions.users.create
    );

    router.get('/',
        app.actions.users.list
    );

    router.get('/:id',
        app.actions.users.show
    );

    router.get('/connect/:login/:password',
        bodyparser,
        app.actions.users.connect
    );

    router.put('/:id',
        bodyparser,
        app.actions.users.update
    );
    router.delete('/:id',
        app.actions.users.remove
    );

    return router;
};
