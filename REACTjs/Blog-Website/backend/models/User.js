import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
});

//to ye mongo me store hone se pahle password ko modified kr deta hai
//pre means save krne se pahle kya karna hai 
UserSchema.pre("save",async function (next) {
    if (this.isModified("password")){
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

//to check ki dono password same hai ki nhi hai 
UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
};

export default mongoose.model("User",UserSchema);
