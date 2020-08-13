module.exports = app => {
    var express = require('express');
    var router = express.Router();

    var TypeController = require('../controllers/type.controller');

    router.get('/', TypeController.findAllType);
    router.get('/', TypeController.findOneType);

    app.use('/api/type',router);
};
