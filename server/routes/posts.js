const Router = require("express");
const router = new Router();
const controller = require("../controller/post");
const { authJWT } = require("../middleware/authJWT.js");

router.get("/", controller.getPosts);
router.post("/add", authJWT, controller.createPost);

module.exports = router;
