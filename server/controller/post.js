const { Posts } = require("../models");

class post {
  async getPosts(req, res) {
    try {
      const postMessages = await Posts.findAll();
      res.status(200).json(postMessages);
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Not get all post" });
    }
  }
  async createPost(req, res) {
    const post = req.body;

    const newPost = new Posts(post);

    try {
      await newPost.save();
      res.status(201).json(newPost);
    } catch (error) {
      res.status(400).json({ message: "Not add post" });
    }
  }
}
module.exports = new post();
