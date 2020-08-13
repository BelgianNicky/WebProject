module.exports = app => {    
    var express = require('express');
    var router = express.Router();

    var PanierController = require('../controllers/panier.controller')

    router.get('/', PanierController.findAllPanier)

    app.use('/api/panier',router);
};