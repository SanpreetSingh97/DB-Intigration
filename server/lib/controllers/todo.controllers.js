import Todo from "../db/models/todo.model.js";

const getTodo = async (req, res) => {
  try {
    const todo = await Todo.find();
    res.status(200).send(todo);
  } catch (error) {
    res.status(500).send(error);
  }
};

const addTodo = async (req, res) => {
  try {
    const data = req.body;
    const todo = new Todo(data);
    await todo.save();
    res.send({ message: "New Todo is saved", todo: todo });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getByIdTodo = async (req, res) => {
  try {
    const id = req.params.todoId;
    const todo = await Todo.findById(id);
    todo ? res.send(todo) : res.send("todo is not found");
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateTodo=async(req,res)=>{
    try {
        const id= req.params.todoId
        const updateTodo=await Todo.findByIdAndUpdate(id,req.body)
        console.log(updateTodo);
        const newTodo= await Todo.findById(id)

        updateTodo?(res.status(201).send({message:"todo is updated",New_Todo:newTodo})):(res.status(404).send("todo is not found"))
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteTodo=async(req,res)=>{
    try {
        const id= req.params.todoId
        const deleteTodo=await Todo.findByIdAndDelete(id,req.body)

        deleteTodo?(res.status(201).send({message:"todo is updated"})):(res.status(404).send("todo is not found"))
    } catch (error) {
        res.status(500).send(error)
    }
}

export { getTodo, addTodo,getByIdTodo,updateTodo, deleteTodo};
