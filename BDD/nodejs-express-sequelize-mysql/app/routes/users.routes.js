module.exports = app => {
    var express = require('express');
    var router = express.Router();

    var UsersController = require('../controllers/users.controller')

    router.post('/', UsersController.createUsers)

    app.use('/api/users',router);
};
