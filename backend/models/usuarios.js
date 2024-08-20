const Sequelize = require("sequelize");
const database = require("./index").sequelize;

const Usuarios = database.define('usuarios', {
    id_usuarios: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome_usuario: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    username: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
    //createdAt e updatedAt
});

module.exports = Usuarios;