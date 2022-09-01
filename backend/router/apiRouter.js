const express = require('express');
const apiRouter = express.Router();
const apiController = require('../controller/apiController');

apiRouter.get('/category', apiController.getCategory);
apiRouter.get('/breed', apiController.getBreed);

module.exports = apiRouter;