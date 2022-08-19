const express = require('express');
const { home } = require('../controller/mainController');
const router = express.Router();
const mainController = require('../controller/mainController')

router.get('/', mainController.home);

module.exports = router;