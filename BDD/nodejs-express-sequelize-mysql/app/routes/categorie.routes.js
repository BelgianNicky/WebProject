module.exports = app => {
    var express = require('express');
    var router = express.Router();

    var CategorieController = require('../controllers/categorie.controller');

    router.get('/', CategorieController.findAllCategorie);
    router.get('/', CategorieController.findOneCategorie);

    app.use('/api/categorie',router);
};
