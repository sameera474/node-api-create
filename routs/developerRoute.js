const express = require("express");
const Developer = require("../models/developerModel");
const {
  createDeveloper,
  getDeveloper,
  getSingleDeveloper,
} = require("../controller/developersController");
const router = express.Router();

//GET

router.get("/", getDeveloper);

// GET SINGLE DOCUMNENT
router.get("/", getSingleDeveloper);

// router.get("/:id", (req, res) => {
//   res.send({ message: "You have made a SINGLE GET request" });
// });

//POST

router.post("/", createDeveloper);
// router.post("/", (req, res) => {
//   res.send({ message: "You have made a POST request" });
// });

//DELETE

router.delete("/:id", (req, res) => {
  res.send({ message: "You have made a DELETE request" });
});

//UPDATE

router.patch("/:id", (req, res) => {
  res.send({ message: "You have made a PATCH request" });
});

module.exports = router;
