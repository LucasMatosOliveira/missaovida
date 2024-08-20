const Sequelize = require("sequelize");
const database = require("./index").sequelize;
const Acolhidos = require("./acolhido");

const Medicamento = database.define("medicamento", {
    id_medicamento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    medicamento_psicotropico: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    nome_medicamento: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    motivo_uso: {
        type: Sequelize.STRING(255),
        allowNull: false
    }
}, {
    timestamps: false
    //createdAt e updatedAt
});

Acolhidos.hasMany(Medicamento, { foreignKey: 'id_acolhido' });
Medicamento.belongsTo(Acolhidos, { foreignKey: 'id_acolhido' });

module.exports = Medicamento;