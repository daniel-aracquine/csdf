const express = require("express");
const router = new express.Router();
const usernames = ["sarthak", "hello", "hi", "aracquine", "manocha"]
const passwords = ["sarthak", "hello", "hi", "aracquine", "manocha"]

router.post("/users/login",async(req,res) => {
    const username = req.body.username
    const password = req.body.password
    try {
        let i = -1;
        for (let [index, val] of usernames.entries()) {
          if(val == username) i = index;   
        };

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var time = today.toLocaleTimeString();
        today = mm + '/' + dd + '/' + yyyy;

        if(i==-1) {
          
          console.log("Login Attempt failed by " + req.ip + " on " + today +" at " + time + " with username " + username + "\n");
          res.status(404).send({})
        }

        if(password == passwords[i]) {
          console.log("Login Attempt passed by " + req.ip + " on " + today +" at " + time + " with username " + username + "\n");
          res.status(201).send({})
        } else {
          console.log("Login Attempt failed by " + req.ip + " on " + today +" at " + time + " with username " + username + "\n");
          res.status(404).send({})
        }
    } catch (e) {
        res.status(e.message ? 401 : 500).send(e.message)
    }
})

module.exports = router