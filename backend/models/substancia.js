const Sequelize = require("sequelize");
const database = require("./index").sequelize;
const Acolhidos = require("./acolhido");

const Substancia = database.define("substancia", {
    id_substancia: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    uso_alcool: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    idade_alcool: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    motivo_alcool: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    uso_tabaco: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    idade_tabaco: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    motivo_tabaco: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    outras_drogas: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    motivo_outras_drogas: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    principal_substancia: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
}, {
    timestamps: false
    //createdAt e updatedAt
});

Acolhidos.hasMany(Substancia, { foreignKey: 'id_acolhido' });
Substancia.belongsTo(Acolhidos, { foreignKey: 'id_acolhido' });

module.exports = Substancia;
