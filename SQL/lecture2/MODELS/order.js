//here DataTypes is predefined in sequelize so use it dont use DataTypes

//Yes, DataTypes is predefined in Sequelize. It's an object provided by Sequelize that contains
// various data types such as STRING, INTEGER, DECIMAL, etc., which you use to define the schema of your database tables when using Sequelize models.



const { DataTypes }=require("sequelize");
const sequelize=require("../db.js")//../ is used as the file is outside of this current directory

//dono ko import kiya as inko use kiya hai to map
const User=require("./user.js");
const Product=require("./product.js");
//this is sequelize function to define table schema
const Order=sequelize.define( "Order",{//ese hi table ka nam de diya
        user_id:{
         type:DataTypes.INTEGER,//ye capital me hi aata hai predefined
         allowNull:false, //means null value nhi aa skti
         //to ye kyo use hua order table me user_id hai and user table me bhi to dono ko map krne ke liye use hua hai ye
         //this is totally optional bs values ko map krne ke liye use kiya hai
         references:{
            model:User,//iskko type krke drop down se select karna
            key:"id",//this comma is required at eachstep
          },
        },
        product_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:Product,//common in order and product
                key:"id",
              },
        },
        quantity:{
            type:DataTypes.INTEGER,
        },
        order_date:{
            type:DataTypes.DATE,//type is data
            defaultValue:DataTypes.NOW,//means current date will be default value 
        },
        },//to alag se handel kiya hai isko table me nhi tha to alag se handle kiya bydefault chla jayega 
        {
            timestamps:false,//kyoki ye nhi that to ye apne se na bnaye to de
        }
);

//to uper reference diya for map to yha bta bhi do ki kya field konsi table ko belong krte hai
Order.belongsTo(User,{foreignKey:"user_id"});
Order.belongsTo(Product,{foreignKey:"product_id"});

module.exports=Order;//now export bhi karna hai


//we are making these models as ager ham direct queries likhenge to ager galat datatype dediya
//aor var me "drop table" de diya so it is not safe






//Yes, exactly. In the context of Sequelize (and generally in ORM frameworks), models represent the structure and schema of database tables.
// They define how data is organized, including column names, data types, relationships with other tables, and additional configurations such as timestamps. 
//Models encapsulate the logic for interacting with database tables, providing an object-oriented interface to perform CRUD (Create, Read, Update, Delete) operations on data.

//SO BS YE JO MODELS HAI YE BAS TABLES KE SCHEMA HAI ONLY
