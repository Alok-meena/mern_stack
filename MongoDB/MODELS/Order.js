//easier than sql to write

const mongoose=require("mongoose");

const orderSchema=new mongoose.Schema({
    orderId:Number,
    customer_email:String,
    amount:Number,
});

//ager user bna nhi hai to ye bna dega aor usko schema dedega
const Order=mongoose.model("Order",orderSchema);
module.exports=Order;

//you can make db.js but it's connection on localhost is very small so no need to make it
