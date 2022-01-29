module.exports = function(sequelize, DataTypes){
    return sequelize.define('chatlist',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allwNull: false
        },
        sender: {
            type: DataTypes.STRING(32),
            allwNull: false
        },
        type: {
            type: DataTypes.STRING(32),
            allwNull: false
        },
        data: {
            type: DataTypes.TEXT
        }
    })
}
