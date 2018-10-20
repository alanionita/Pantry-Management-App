const apiRouter = require('express').Router();

apiRouter.get('/',()=> {
    console.log('hi')
});

module.exports = apiRouter;