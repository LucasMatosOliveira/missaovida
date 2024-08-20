const Sequelize = require("sequelize");
const database = require("./index").sequelize;
const Acolhidos = require("./acolhido");

const Juridico = database.define("vida_juridica", {
    id_vida_juridica: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    historico_prisao: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    motivo_prisao: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    processos: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    cidade_processo: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    estado_processo: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    uso_tornozeleira: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    informou_central: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    informou_central: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    cumpriu_pena: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    situacao_legal: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    motivo_situacao_legal: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
}, {
    timestamps: false
    //createdAt e updatedAt
});

Acolhidos.hasMany(Juridico, { foreignKey: 'id_acolhido' });
Juridico.belongsTo(Acolhidos, { foreignKey: 'id_acolhido' });

module.exports = Juridico;
