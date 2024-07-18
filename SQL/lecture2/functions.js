const User=require("./models/user");
const Order=require("./models/order");
const Product=require("./models/product");



//Yes, User.create is a function provided by Sequelize. It allows you to create a new instance of the User model and save it to the database in a single step.
//These methods include create, findAll, findOne, update, destroy, and many more

//and in the data entry time enter only valid datatypes

const createUser=async (name,email)=>{
    return await User.create({name,email});
}

const createProduct=async (name,description,price)=>{
    return await Product.create({name,description,price});
}

const createOrder=async (user_id,product_id,quantity)=>{//and date is default jis din dali vo date aa jayegi
    return await Order.create({user_id,product_id,quantity});
}

//function to get data to ager sql me krte to select * from products where id=1; ese krte
const getUserById=async (id)=>{
    return await User.findByPk(id);//yha id ke basis pe search kr rhe hai to jo ki hamne
    //primarykey rkhi hai so find by this method only

    //can use findOne(id) to get only one user with that id
    //can use findByPk by primary key used for INDEXING 
}

const getAllUsers=async ()=>{
    return await User.findAll();
}

const getAllProducts=async ()=>{
    return await Product.findAll();
}

//so here along with orders product and users data will also be printed this 
//is why we used reference in the models (orders)
const getAllOrders=async ()=>{
    //    const data=await Order.findAll({

    return await Order.findAll({
        include:[
            {model:User,attributes:["name","email"]},
            {model:Product,attributes:["name","price"]},
        ],
    });
    console.log(data);
};

const getOrderDetails=async (order_id)=>{
    return await Order.findOne({//to findone ke sath where condition use hoti hai 
        where: { id:order_id},
        include: [
            //aor sath me hamne model ke user and product ko bhi get kr liya hai
            { model: User, attributes: ["name", "email"] },
            { model: Product, attributes: ["name", "price"] },
        ],
    });
};

//there are two ways to update the data

//way1

// const updateProduct=async (id,name,description,price)=>{
    //so is id ke koi ek value search krke update kr di uski details
    //it is similar to limit what we have done in sql

    //finding if extis or not
//     const product=await Product.findOne({
//         where:{
//             id:id,
//         },
//     })

//     if(product){ //if exits update the data 
//         product.name=name;
//         product.description=description;
//         product.price=price;
//         console.log(product);
//         product.save();//it will save the updated values
//     }
//     return product;
// }

//way 2
// const updateProduct = async (id, updates) => {
//     const product = await Product.findByPk(id);
//     if (product) {
//       return await product.update(updates);
//     }
//     throw new Error("Product not found");
//   };

const updateProduct = async (id, updates) => {
    const [affectedRows] = await Product.update(updates, {
        where: { id }
    });
    if (affectedRows === 0) {
        throw new Error("Product not found");
    }
    return await Product.findByPk(id); // Return the updated product
};

// const updateUser=async (id,updates)=>{//updates me sari update value bhej do jo update karna hai is id ko
//     const user=await User.findByPk(id);
//     if(user){
//         return await User.update(updates);//if product exits then only update 
//     }
//     throw new Error("User not found");
// };

const updateUser = async (id, updates) => {
    const [affectedRows] = await User.update(updates, {
        where: { id }
    });
    if (affectedRows === 0) {
        throw new Error("User not found");
    }
    return await User.findByPk(id); // Return the updated user
};



  

//to use this function in another file
module.exports={
    createUser,
    createProduct, 
    createOrder,
    getUserById,
    getAllUsers,
    getAllProducts,
    getAllOrders,
    getOrderDetails,
    updateProduct,
    updateUser,
};
