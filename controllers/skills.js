const Skills = require("../models/skill");

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
};

//this is where the view .ejs file will pull from - NOT directly from the model
function index(req, res) {
  res.render("skills/index", {
    skills: Skills.getAll(),
  });
}

function newSkill(req, res) {
  res.render("skills/new", { title: "New Skill" });
}

function show(req, res) {
  res.render("skills/show", {
    skills: Skills.getOne(req.params.id),
  });
}

function create(req, res) {
  //need to update the model with the information from the form

  Skills.create(req.body);
  //need to redirect to the page where the post will be added
  res.redirect("/skills");
}

function deleteSkill(req, res) {
  Skills.deleteOne(req.params.id);
  res.redirect("/skills");
}
