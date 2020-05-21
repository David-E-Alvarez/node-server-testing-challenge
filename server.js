
const express = require("express");

const server = express();

server.use(express.json());

let users = [
    {
        name: "david",
        age: 21
    },
    {
        name: "johnny",
        age: 15
    },
    {
        name: "alec",
        age: 8
    }
];

let usersNames = ["david", "johnny", "alec"];
//console.log("users: ", users)
// users.forEach(user => {
//     console.log('---->',user.name)
// })

server.get("/", (req, res) => {
    res.status(200).json({ message: "up" });
  });

server.post('/users', (req,res) => {
    res.send(users);
})

server.get('/users', (req,res) => {
    res.status(201).send(usersNames);
})

module.exports = server;