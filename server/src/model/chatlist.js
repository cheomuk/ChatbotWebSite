module.exports = function(sequelize, DataTypes){
    return sequelize.define('chatlist',{
        id: { // 채팅의 ID
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allwNull: false
        },
        sender: { // 채팅을 보낸 사람의 닉네임 / 'bot'은 특별 취급
            type: DataTypes.STRING(32),
            allwNull: false
        },
        type: { // 'text' or 'image'
            type: DataTypes.STRING(32),
            allwNull: false
        },
        data: { // type의 따른 데이터
            type: DataTypes.TEXT
        }
    })
}
