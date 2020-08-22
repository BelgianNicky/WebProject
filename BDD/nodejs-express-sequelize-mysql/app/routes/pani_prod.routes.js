module.exports = app => {
    var express = require('express');
    var router = express.Router();

    var Pani_prod_Controller = require('../controllers/pani_prod.controller')

    router.get('/:panierId', Pani_prod_Controller.findAllProduitByPanierId);
    router.post('/', Pani_prod_Controller.createPaniProd);
    router.delete('/', Pani_prod_Controller.deleteProduitByPanierId);

    app.use('/api/pani_prod',router);
};
