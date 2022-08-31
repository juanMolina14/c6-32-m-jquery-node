const express = require('express');
const petRouter = express.Router();
const petController = require('../controller/petController');

petRouter.get('/', petController.listPets);
petRouter.post('/', petController.createPet);
petRouter.delete('/:id', petController.deletePet);
petRouter.put('/:id', petController.putPet);

petRouter.get('/genericData', petController.getGenericData);

module.exports = petRouter;