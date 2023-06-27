var express = require("express");
var router = express.Router();
//require the controller that exports Skills crud functions
var skillsCtrl = require("../controllers/skills");
//All actual paths start with "/skills"

//GET /skills
router.get("/", skillsCtrl.index);

//GET /skils/:id

router.get("/:id", skillsCtrl.show);

module.exports = router;
