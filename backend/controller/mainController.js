const fs = require('fs');
const path = require('path');

const petDataPath = path.join(__dirname, '../database/petData.json');
const petDataText = fs.readFileSync(petDataPath, 'utf-8');
const pets = JSON.parse(petDataText);

module.exports = {
    home: (req, res) => {
        const allPets = [];
        allPets.push(pets.map(pet => pet));
        res.send(allPets);
    },
};