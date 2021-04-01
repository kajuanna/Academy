var express = require("express");
var router = express.Router();
var { Users } = require("../models");

//const user = req.body;

router.get("/", (req, res, next) => {
  Users.findAll()
    .then((users) => {
      res.status(200);
      res.json(users).end();
    })
    .catch((error) => {
      res.status(500);
      res.json(error).end();
    });
});

router.post("/", (req, res, next) => {
  const user = req.body;

  Users.create({
    firstName: user.firstName,
    lastName: user.lastName,
    emailAddress: user.emailAddress,
    password: user.password,
  })
    .then((user) => {
      res.status(201).location("/");
      res.end();
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json(error);
      res.end();
    });
});

module.exports = router;
