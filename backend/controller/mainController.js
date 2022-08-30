const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const petDataPath = path.join(__dirname, '../database/petData.json');
const petDataText = fs.readFileSync(petDataPath, 'utf-8');
const pets = JSON.parse(petDataText);

const userDataPath = path.join(__dirname, '../database/userData.json');
const userDataText = fs.readFileSync(userDataPath, 'utf-8');
const users = JSON.parse(userDataText);

module.exports = {
    home: (req, res) => {
        const allPets = [];
        allPets.push(pets.map(pet => pet));
        res.send(allPets);
    },
    loginValidator: (req, res) => {
        const userEmail = req.body.email;
        let userFound;
        userFound = users.find(u => u.email === userEmail)
        if(userFound === undefined){
            return (
                res.status(401).json({
                    errors: [{ msg: "email - Invalid credentials" }],
                    old: req.body,
                })
            )
        } else if (userFound !== undefined) {
            if (
                bcrypt.compareSync(req.body.password, userFound.password) == true
            ) {
                req.session.loggedUser = userFound;
            } else {
                return (
                    res.status(401).json({
                        errors: [{ msg: "pass - Invalid credentials" }],
                        old: req.body,
                    })
                )
            }
        }  
        
        // res.status(200).json({
        //     errors: [{ msg: "Loged in" }],
        //     old: req.body,
        // });
        res.redirect(200, "/");
    },
    signout: (req, res) => {
        req.session.destroy();
        res.redirect("/");
    },
};