const app = require("express");
const router = app.Router();
const { register,registerValidation } = require("../controllers/userController")
router.post("/register",registerValidation, register);
module.exports = router;