const fs = require('fs');
const path = require('path');

const petDataPath = path.join(__dirname, '../database/petData.json');
const petDataText = fs.readFileSync(petDataPath, 'utf-8');
const pets = JSON.parse(petDataText);

const petGenDataPath = path.join(__dirname, '../database/petGenericData.json');
const petGenDataText = fs.readFileSync(petGenDataPath, 'utf-8');
const petGenData = JSON.parse(petGenDataText);

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
            id: crypto.randomUUID() ,
            category: req.body.category,
            breed: req.body.breed,
            color: req.body.color,
            size: req.body.size,
            name: req.body.name,
            description: req.body.description,
            street: req.body.street,
            number: req.body.number,
            province: req.body.province,
            department: req.body.department,
            city: req.body.city
            // must implement multer
            // petPic: req.body.petPic
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
            category: req.body.category,
            breed: req.body.breed,
            color: req.body.color,
            size: req.body.size,
            name: req.body.name,
            description: req.body.description,
            street: req.body.street,
            number: req.body.number,
            province: req.body.province,
            department: req.body.department,
            city: req.body.city
        }
        pets.splice(petToUpdate, 1, updatePet);
        saveChangesPets();
        res.send(`Updated: pet id ${petToUpdate} with ${JSON.stringify(updatePet)}`)
    },

    getGenericData: (req, res) => {
        // const genData = [];
        // gDataPets.push(pets.map(pet => pet));
        res.send(petGenData);
    },
};