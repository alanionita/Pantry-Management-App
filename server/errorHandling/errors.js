const express = require("express");

const handle400S = (req, res, next) => {
if(err.status === 400)res.send({status:400,msg:'bad request'})
else next(err)
};

const handle404s = (req, res, next) => {
    if(err.status === 404)res.send({status:404,msg:'page not found'})
    else next(err)
};

const handle500s = (req, res, next) => {
    res.send({status:500, msg:'internal server error'})
};

module.exports = {handle400S, handle404s, handle500s}