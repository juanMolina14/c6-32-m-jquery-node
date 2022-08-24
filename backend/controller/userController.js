const fs = require('fs');
const path = require('path');

const userDataPath = path.join(__dirname, '../database/userData.json');
const userDataText = fs.readFileSync(userDataPath, 'utf-8');
const users = JSON.parse(userDataText);

function saveChangesUser(){
    const usersDataStringified = JSON.stringify(users);
    fs.writeFileSync(userDataPath, usersDataStringified, 'utf-8'); 
};

module.exports = {
    listUsers: (req, res) => {
        const allUsers = [];
        allUsers.push(users.map(user => user));
        res.send(allUsers);
    },
    
    createUser: (req, res) => {
        const newUser = {
            ...req.body
        }
        users.push(newUser);
        saveChangesUser(newUser);
        res.send(`Created: ${newUser}`)
    },
    
    deleteUser: (req, res) => {
        const userToDelete = users.findIndex(user => req.params.id == user.id);
        users.splice(userToDelete, 1);
        saveChangesUsers();
        res.send(`${userToDelete} deleted!`)
    },

    putUser: (req, res) => {
        const userToUpdate = users.findIndex(user => req.params.id == user.id);
        const updateUser = {
            ...req.body
        }
        users.splice(userToUpdate, 1, updateUser);
        saveChangesUser();
        res.send(`Updated: user id ${userToUpdate} with ${JSON.stringify(updateUser)}`)
    },
};