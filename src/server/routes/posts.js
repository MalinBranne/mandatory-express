const express = require("express");
const store = require("../store"); // härifrån hämtas alla metoder vi anropar i denna filen
const route = express.Router();

/************************************************* */

route.get("/posts", (req, res) => {
  store.getPosts().then(posts => res.json({ posts })); // med getProducts returnerar ett promise.
});

/************************************************* */

route.get("/posts/:id", (req, res) => {
  const postId = Number(req.params.id);

  store
    .getPost(postId)
    .then(post => res.json(post))
    .catch(error => {
      res.status(404).json({ error });
    });
});

/************************************************* */

route.post("/posts", (req, res) => {
  const postData = req.body;
  const newPost = store.addPost(postData);

  res.json({ posts: newPost });
});

/************************************************* */

module.exports = route;
