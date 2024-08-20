const Sequelize = require("sequelize");
const database = require("./index").sequelize;
const Acolhidos = require("./acolhido");

const Social = database.define("estado_social", {
    id_estado_social: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    situacao_rua: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    tempo_rua: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    motivo_rua: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    chegada_missao_vida: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    sentimentos: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    objetivos: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    outros_centros: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    nome_outros_centros: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    tempo_outros_centros: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    motivo_saida_outros_centros: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
}, {
    timestamps: false
    //createdAt e updatedAt
});

Acolhidos.hasMany(Social, { foreignKey: 'id_acolhido' });
Social.belongsTo(Acolhidos, { foreignKey: 'id_acolhido' });

module.exports = Social;
