const app = require("express")();
const bodyParser = require("body-parser");
const apiRouter = require('./routes/api-router');
const { handle400s, handle404s, handle500s} =  require('./errorHandling/errors');

app.use(bodyParser.json());

app.use('/api', apiRouter);


app.get('/*', (req, res, next) => {
    next({status:404, msg:'page not found'})
});

// app.use(handle400s);

// app.use(handle404s);

// app.use(handle500s);

module.exports = app;