module.exports=(sequelize,DataTypes)=>{
    return sequelize.define("Message",{
        //only one key as id is default,created,updated also default and one is foreign key
        text:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    });
};
