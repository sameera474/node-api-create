const Developer = require("../models/developerModel");
const mongoose = require("mongoose");

const createDeveloper = async (req, res) => {
  //   res.send({ message: "Developer" });
  const { name, age, skills } = req.body;
  try {
    const newDeveloper = await Developer.create({ name, age, skills });
    res.status(200).json(newDeveloper);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createDeveloper,
};
