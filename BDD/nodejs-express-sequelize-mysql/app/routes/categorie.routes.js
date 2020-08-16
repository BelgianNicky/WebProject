module.exports = app => {
    var express = require('express');
    var router = express.Router();

    var CategorieController = require('../controllers/categorie.controller');

    router.get('/:id', CategorieController.findOneCategorie);
    router.post('/', CategorieController.createCategorie);
    router.put('/:id', CategorieController.updateCategorie);
    router.delete('/:id', CategorieController.deleteCategorie);
    router.get('/', CategorieController.findAllCategorie);

    app.use('/api/categorie',router);
};
