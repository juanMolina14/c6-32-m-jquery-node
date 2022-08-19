const express = require('express');
const petRouter = express.Router();
const petController = require('../controller/petController');

petRouter.get('/', petController.listPets);
petRouter.post('/', petController.createPet);
petRouter.delete('/', petController.deletePet);
petRouter.put('/', petController.putPet);

module.exports = petRouter;