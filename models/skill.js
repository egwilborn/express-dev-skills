const devSkills = [
  { id: 160501, todo: "Learn HTML/CSS", done: true },
  { id: 160502, todo: "Learn JavaScript", done: true },
  { id: 160503, todo: "Learn Express", done: false },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};

function getAll() {
  return devSkills;
}

function getOne(id) {
  // converts URL parameter into a number to compare to devSkills array
  id = parseInt(id);
  //now you want to find and return the object that contains the corresponding id pulled from index.ejs
  return devSkills.find((skill) => skill.id === id);
}

function create(skill) {
  //add the id
  skill.id = Date.now() % 1000000;
  skill.done = false;
  devSkills.push(skill);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = devSkills.findIndex((skill) => skill.id === id);
  devSkills.splice(idx, 1);
}
