const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    address:{
        street:String,
        city:String,
        state:String,
        zip:String,
    },
});

//ager user bna nhi hai to ye bna dega aor usko schema dedega
const User=mongoose.model("User",userSchema);
module.exports=User;
