const {DataTypes}=require("sequelize");
const sequelize=require("../db.js");

//id ko pahle hi order.js me map kr liya

//Yes, you are correct. The reason user_id and product_id are not mentioned in the 
//User and Product schemas is that these fields are specific to the Order table. 
//They are used to establish relationships between the Order table and the User and Product tables.

const User=sequelize.define("User",{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    },
    {
        //here we can give tablename:"Product" but sequelize manages it automatically
        timestamps:true,
        //Yes, both createdAt and updatedAt will work only if timestamps are enabled for your model. 
        createdAt:"created_at",
        updatedAt:false,
    },
)


module.exports=User;
