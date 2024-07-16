import Comments from "../db/models/comment.model.js"


const getComment = async (req, res) => {
    try {
      const comment = await Comments.find();
      res.send(comment);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  const addComment = async (req, res) => {
    try {
      const data = req.body;
      const comment = new Comments(data);
      await comment.save();
  
      res.status(201).send(comment);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  const getCommentById = async (req, res) => {
    try {
      const id = req.params.commentId;
      const comment = await Comments.findById(id);
  
      res.send(comment);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  const updateComments = async (req, res) => {
    try {
      const id = req.params.commentId;
      const updatecomment = await Comments.findByIdAndUpdate(id, req.body);
      updatecomment
        ? res.status(201).send(
          updatecomment
          )
        : res.status(404).send("comment not found");
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  const deleteComment = async (req, res) => {
    try {
      const id = req.params.commentId;
    const deletecomment = await Comments.findByIdAndDelete(id);
    deletecomment
      ? res.send({
          message: "comment is deleted",
        })
      : res.status(404).send({
          message: "comment is not Found",
        });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  export { getComment, addComment, getCommentById, updateComments ,deleteComment};
  

