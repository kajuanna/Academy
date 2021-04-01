var express = require("express");
var router = express.Router();
var { Courses } = require("../models");

/* GET api router. */
router.get("/", (req, res) => {
  Courses.findAll()
    .then((data) => res.status(200).json(data))
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});


router.get("/courses/:id", (req, res) => {
  User.push(user);
  res.status(200).end();
}),
  //post route
  router.post("/", (req, res) => {
    console.log(req.body);
    Courses.create(req.body)
      .then((course) => {
        res.send(201).end();
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.json(error).end();
      }); // TODO: set location header
  }),
  
  
  //put couse (update)

  router.put("/course/:id", function (req, res, next) {
    Courses.findByPk(req.params.id)
      .then(function (course) {
        book
          .update({
            req.body
          })
          .then((course) => {
            res.send(201).end();
                          
          })
          .catch((error) => {
            res.status(500);
            res.json(error).end();
          });
      })
      .catch((error) => {
        console.log("PK ERR: ", error);
        next();
      });
  });
  
  
  
  //delete course
  router.delete("/courses/:id/delete", function (req, res, next) {
    Courses.findByPk(req.params.id).then((course) => {
      course.destroy();
      res.status(204).end();
    });
  });

module.exports = router;
