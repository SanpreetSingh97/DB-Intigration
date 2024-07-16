import Posts from "../db/models/post.model.js";

const getPost = async (req, res) => {
  try {
    const post = await Posts.find();
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
};

const addPost = async (req, res) => {
  try {
    const data = req.body;
    const post = new Posts(data);
    await post.save();

    res.status(201).send(post);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getPostById = async (req, res) => {
  try {
    const id = req.params.postId;
    const post = await Posts.findById(id);

    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updatePosts = async (req, res) => {
  try {
    const id = req.params.postId;
    const updatePost = await Posts.findByIdAndUpdate(id, req.body);
    updatePost
      ? res.status(201).send(
        updatePost
        )
      : res.status(404).send("Post not found");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deletePost = async (req, res) => {
  try {
    const id = req.params.postId;
  const deletePost = await Posts.findByIdAndDelete(id);
  deletePost
    ? res.send({
        message: "Post is deleted",
      })
    : res.status(404).send({
        message: "Post is not Found",
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

export { getPost, addPost, getPostById, updatePosts ,deletePost};
