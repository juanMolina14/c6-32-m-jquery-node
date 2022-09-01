const fs = require('fs');
const path = require('path');

const categoryPath = path.join(__dirname, '../database/petGenericData.json');
const categoryText = fs.readFileSync(categoryPath, 'utf-8');
const categoryData = JSON.parse(categoryText);

module.exports = {
    getCategory: (req, res) => {
        
        const cats = Object.value(categoryData[0]);
        
        res.send(cats);
    },
    getBreed: (req, res) => {
        res.send(categoryData.breed);
    }
}