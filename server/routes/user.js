const Router = require("express");
const router = new Router();
const controller = require("../controller/auth");

router.post("/reg", controller.reg);
router.post("/login", controller.login);
router.get("/users", controller.users);

module.exports = router;
