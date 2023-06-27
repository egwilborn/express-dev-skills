const devSkills = [
  { id: 160501, todo: "Learn HTML/CSS", done: true },
  { id: 160502, todo: "Learn JavaScript", done: true },
  { id: 160503, todo: "Learn Express", done: false },
];

module.exports = {
  getAll,
  getOne,
};

function getAll() {
  return devSkills;
}

function getOne(id) {
  // convers URL parameter into a number to compare to devSkills array
  id = parseInt(id);
  //now you want to find and return the object that contains the corresponding id pulled from index.ejs
  return devSkills.find((skill) => skill.id === id);
}
