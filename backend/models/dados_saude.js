const Sequelize = require("sequelize");
const database = require("./index").sequelize;
const Acolhidos = require("./acolhido");

const Saude = database.define("dados_saude", {
    id_dados_saude: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    tratamento_psiquiatrico: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    local_tratamento: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    lesao_fisica: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    local_lesao_fisica: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    doenca_respiratoria: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    nome_doenca_respiratoria: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    alergia_alimentar: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    nome_alimento: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    alergia_medicamentos: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    nome_alergia_medicamento: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    outras_doencas: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    tentativa_suicidio: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    automutilacao: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    historico_cancer: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    tipo_cancer: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
}, {
    timestamps: false
    //createdAt e updatedAt
});

Acolhidos.hasMany(Saude, { foreignKey: 'id_acolhido' });
Saude.belongsTo(Acolhidos, { foreignKey: 'id_acolhido' });

module.exports = Saude;
