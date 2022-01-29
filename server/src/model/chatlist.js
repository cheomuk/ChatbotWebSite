module.exports = function(sequelize, DataTypes){
    return sequelize.define('chatlist',{
        id: {
            type:DataTypes.STRING(250), // string 250자까지 허용
            autoIncrement:true,
            primaryKey:true,
            allwNull:false
        },
        name: {
            type:DataTypes.STRING(64)
        },
        message:{
            type:DataTypes.TEXT
        }
    })
}