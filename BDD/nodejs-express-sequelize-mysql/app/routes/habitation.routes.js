module.exports = app => {
    var express = require('express');
    var router = express.Router();

    var HabitationController = require('../controllers/habitation.controller')

    router.get('/', HabitationController.findOneHabitation);
    router.post('/', HabitationController.createHabitation);
    router.put('/:id', HabitationController.updateHabitation);
    router.delete('/:id', HabitationController.deleteHabitation);

    app.use('/api/habitation',router);
};
