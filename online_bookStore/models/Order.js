const mongoose=require("mongoose");

//ham jab sequelize use kr rhe the tab hamne references use kiya tha
//to yha pe ye hai ki book ka nam same hona chahihe jo book ke schema me hai


const OrderSchema=new mongoose.Schema({
    //to yha ham user ka name nhi user ki id store kr rhe hai jo users table me exist krni chahihe
    //then only we can make orders
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},//to ise users se ref d diya hai
    //to orders me ek array bnaya hai jo ki info store krega ki kitni books order ki hai 
    //their quantity
    books:[
        {
            book:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Book",//this is required as if we are orderin a book then it must exist in the books database
                required:true,
            },
            quantity:{type:Number,required:true},
        },
    ],
    total:{type:Number,required:true},
    createdAt:{type:Date,default:Date.now},
});



const Order=mongoose.model("Order",OrderSchema);
module.exports=Order;
