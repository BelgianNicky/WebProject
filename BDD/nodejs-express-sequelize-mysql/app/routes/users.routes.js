module.exports = app => {
    var express = require('express');
    var router = express.Router();

    var UsersController = require('../controllers/users.controller');

    router.post('/', UsersController.createUsers);
    router.get('/:id', UsersController.findOneUsers);
    router.get('/', UsersController.findUserPw);

    app.use('/api/users',router);
};
