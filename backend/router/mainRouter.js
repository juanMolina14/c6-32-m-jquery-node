const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainController')

router.get('/', mainController.home);
// router.get('/login', mainController.login);
router.post('/login', mainController.loginValidator);
router.get('/logout', mainController.signout);

module.exports = router;