const User=require("../models/User.js");
const jwt=require("jsonwebtoken");

const registerUser=async (req,res)=>{
    const {username,email,password}=req.body;
    try{
        const user=await User.create({username,email,password});
        const token=jwt.sign({id:user._id},"secret",{
            expiresIn:"1h",
        });
        res.status(201).json({token});
    }  catch(err){
        res.status(400).json({error:err.message});
    }
};


const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (user && (await user.matchPassword(password))) {
        const token = jwt.sign({ id: user._id }, "secret", {
          expiresIn: "1h",
        });
  
        res.json({ token });
      } else {
        res.status(401).json({ message: "Invalid email or password" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = { registerUser, loginUser };
