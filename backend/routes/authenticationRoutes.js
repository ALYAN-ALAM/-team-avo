const router = require("express").Router();
const { login } = require("../controller/authentication");

router.post("/login", login);

module.exports = router;
