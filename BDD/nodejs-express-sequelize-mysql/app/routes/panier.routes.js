module.exports = app => {
    var express = require('express');
    var router = express.Router();

    var PanierController = require('../controllers/panier.controller')

    router.get('/', PanierController.findAllPanier)
    router.post('/', PanierController.createPanier)

    app.use('/api/panier',router);
};
