const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/login',
    userController.validateLogin,
    (req, res) => {
        console.log('login User router is working');
        res.status(200).json(res.locals.response);
    }
);

router.post('/',
    userController.createUser,
    (req, res) => {
        console.log('login User router is working');
        console.log(res.locals.response);
        res.status(200).json(res.locals.response);
    }
);

module.exports = router;