module.exports = app => {
    var express = require('express');
    var router = express.Router();

    var HabitationController = require('../controllers/habitation.controller')

    router.get('/', HabitationController.findOneHabitation)

    app.use('/api/habitation',router);
};