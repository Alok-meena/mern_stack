const {DataTypes}=require("sequelize");
const sequelize=require("../db.js");

const Product=sequelize.define("Product",{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:true,
    },
    price:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false,
    },
    },
    {
        //here we can give tablename:"Product" but sequelize manages it automatically
        timestamps:true,
        //Yes, both createdAt and updatedAt will work only if timestamps are enabled for your model. 
        //to hmara bs createdAt bna hua tha to isme iski column ka name dal diya and updated_at
        //nhi bna hua to false kr diya timstamps ko true kroge to dono me se ek column honi chahihe
        //fir ye automatically fill kr dega

        //but ager dono bne hue hai to dene ki require nhi khali timestamps true se kam chl jayega
        createdAt:"created_at",
        updatedAt:false,
    },
)

module.exports=Product;


//VERY IMPORTANT In Sequelize, the model definition includes two main parts: 
//the attribute definition and the model options. The attribute definition specifies the columns and their data types,
// while the model options provide additional configurations for the model. The timestamps option and other related options are considered model-level configurations, which is why they are specified outside the attribute definition.



//Yes, createdAt and updatedAt are predefined attributes in Sequelize when you define a model.
// By default, Sequelize automatically manages these timestamp fields for you, adding them to each row in the table to record when the row was created and last updated. Here's a brief explanation of the properties you mentioned:

// timestamps: true: This tells Sequelize to automatically add the createdAt and updatedAt fields to the table.
// createdAt: "created_at": This renames the default createdAt field to created_at.
// updatedAt: false: This disables the updatedAt field, so Sequelize will not automatically add or manage it.


//createdAt:
//Function: This field stores the timestamp when a record was initially created.
// Use Case: It helps in keeping track of when a particular record was added to the database. For example, in a user management system, it can tell you when a user registered.
// Default Behavior: Automatically populated by Sequelize when a new record is inserted into the table.


// updatedAt:
// Function: This field stores the timestamp when a record was last updated.
// Use Case: It helps in tracking the last modification time of a record. For instance, in a blog post application, it can indicate when a post was last edited.
// Default Behavior: Automatically updated by Sequelize every time the record is updated.
