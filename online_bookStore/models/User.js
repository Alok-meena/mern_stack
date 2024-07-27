const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
//to ise bahar bhi use kr skte hai and if we want to use it here 

const UserSchema=new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},

});

//to jab koi userschema bnega to use save karne se pahle khuch perform karna hai ager
//to do use it it is a kind of middleware
UserSchema.pre("save",async function(next){
    //this is used to update the data
    //if password is modified then aage bdho 
    //o/w if modify kiya hai then again encrypt kro 
    //used for reset and update passwod
    //basically to encrypt the updated password

    if(!this.isModified("password")){
        return next();
    }
    const salt=await bcrypt.genSalt(10);//generate salt
    this.password=await bcrypt.hash(this.password,salt);
    next();
})

UserSchema.methods.matchPassword=async function(enteredPassword){
    return await bcrypt.comapre(enteredPassword,this.password)
}
const User=mongoose.model("User",UserSchema);

module.exports=User;
