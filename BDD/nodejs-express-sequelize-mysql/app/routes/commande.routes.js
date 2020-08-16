module.exports = app => {
    var express = require('express');
    var router = express.Router();

    var CommandeController = require('../controllers/commande.controller');

    router.get('/:id', CommandeController.findOneCommande);
    router.post('/', CommandeController.createCommande);
    router.put('/:id', CommandeController.updateCommande);
    router.delete('/:id', CommandeController.deleteCommande);
    router.get('/',CommandeController.findAllCommandePan);

    app.use('/api/commande',router);
};
