const fs = require('fs');
const path = require('path');

const petDataPath = path.join(__dirname, '../database/petData.json');
const petDataText = fs.readFileSync(petDataPath, 'utf-8');
const pets = JSON.parse(petDataText);

function saveChangesPets(){
    const petsDataStringified = JSON.stringify(pets);
    fs.writeFileSync(petDataPath, petsDataStringified, 'utf-8'); 
};

module.exports = {
    listPets: (req, res) => {
        const allPets = [];
        allPets.push(pets.map(pet => pet));
        res.send(allPets);
    },
    
    createPet: (req, res) => {
        const newPet = {
            ...req.body
        }
        pets.push(newPet);
        saveChangesPets(newPet);
        res.send(`Created: ${newPet}`)
    },
    
    deletePet: (req, res) => {
        const petToDelete = pets.findIndex(pet => req.params.id == pet.id);
        pets.splice(petToDelete, 1);
        saveChangesPets();
        res.send(`${petToDelete} deleted!`)
    },

    putPet: (req, res) => {
        const petToUpdate = pets.findIndex(pet => req.params.id == pet.id);
        const updatePet = {
            ...req.body
        }
        pets.splice(petToUpdate, 1, updatePet);
        saveChangesPets();
        res.send(`Updated: pet id ${petToUpdate} with ${JSON.stringify(updatePet)}`)
    },
};