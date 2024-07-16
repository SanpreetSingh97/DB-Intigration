import bcrypt from "bcrypt";
import Users from "../db/models/user.model.js";
import jwt from "jsonwebtoken"

const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashingPassword = bcrypt.hashSync(password, 10);

    const data = {
      name: name,
      email: email,
      password: hashingPassword,
    };

    const user = new Users(data);
    await user.save();

    res.send({ user: user, message: "User created successfully!" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const loginUser=async(req,res)=>{
    const{email,password}= req.body
const user= await Users.findOne({email})

if(!user){
    res.status(404).send("User is not found")
}else{
const isMatched= bcrypt.compareSync(password,user.password)
if(!isMatched){
    res.status(500).send("Wrong password")
}else{
    const token=jwt.sign({id:user.id},"logintoken",
        {algorithm:"HS256",
            allowInsecureKeySizes:true,
            expiresIn:86400
        }
    )
    res.send({user:user,token:token})
}

}

}

const getUser = async (req, res) => {
    
  try {
    const user = await Users.find();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { loginUser, getUser,signupUser };
