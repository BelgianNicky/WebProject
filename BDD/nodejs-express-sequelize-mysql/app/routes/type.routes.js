module.exports = app => {
    var express = require('express');
    var router = express.Router();

    var TypeController = require('../controllers/type.controller');

    router.get('/:id', TypeController.findOneType);
    router.post('/', TypeController.createType);
    router.put('/:id', TypeController.updateType);
    router.delete('/:id', TypeController.deleteType);
    router.get('/', TypeController.findAllType);

    app.use('/api/type',router);
};
