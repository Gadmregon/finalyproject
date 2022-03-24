const Router = require("express");
const router = new Router();
const controller = require("../controller/post");

router.get("/", controller.getPosts);
router.post("/add", controller.createPost);

module.exports = router;
