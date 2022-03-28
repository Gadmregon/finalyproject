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

  async getPosts(req, res) {
    const { id } = req.params.id;

    try {
      const post = await PostMessage.findByPk(id);

      res.status(200).json(post);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async createPost(req, res) {
    const post = req.body;

    const newPost = new Posts({
      ...post,
      creator: req.userId,
      createdAt: new Date().toISOString(),
    });

    try {
      await newPost.save();
      res.status(201).json(newPost);
    } catch (error) {
      res.status(400).json({ message: "Not add post" });
    }
  }
}
module.exports = new post();
