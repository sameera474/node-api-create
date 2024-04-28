const Developer = require("../models/developerModel");
const mongoose = require("mongoose");

//Create New Developer
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

// Get Developer
const getDeveloper = async (req, res) => {
  try {
    const allDevelopers = await Developer.find({}).sort({ createAt: -1 });
    res.status(200).json(allDevelopers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get Single Developer
const getSingleDeveloper = async (req, res) => {
  const { id } = req.params;
  try {
    const getSingleDocument = await Developer.findById(id);

    res.status(200).json(get);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createDeveloper,
  getDeveloper,
};
