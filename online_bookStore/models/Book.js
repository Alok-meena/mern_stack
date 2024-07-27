const mongoose=require("mongoose");

const BookSchema=new mongoose.Schema({
    title:{type:String, required:true},
    author:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:Number,required:true},
    imageUrl:{type:String,required:true},
});

const Book=mongoose.model("Book",BookSchema);
module.exports=Book;
