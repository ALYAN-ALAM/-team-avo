const router = require("express").Router();
const {
  createIdea,
  getMyIdea,
  updateIdea,
  deleteIdea,
  getallIdeas,
} = require("../controller/ideasController");
const verifyToken = require("../middleware/auth");

router.post("/createIdea", verifyToken, createIdea);
router.post("/getMyIdea", verifyToken, getMyIdea);
router.put("/updateIdea", verifyToken, updateIdea);
router.delete("/deleteIdea/:id", verifyToken, deleteIdea);
router.post("/getallIdeas", getallIdeas);

module.exports = router;
