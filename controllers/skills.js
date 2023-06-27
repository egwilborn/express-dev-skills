const Skills = require("../models/skill");

module.exports = {
  index,
  show,
};

//this is where the view .ejs file will pull from - NOT directly from the model
function index(req, res) {
  res.render("skills/index", {
    skills: Skills.getAll(),
  });
}

function show(req, res) {
  res.render("skills/show", {
    skills: Skills.getOne(req.params.id),
  });
}
