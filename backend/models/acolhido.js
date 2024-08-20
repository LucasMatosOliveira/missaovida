const Sequelize = require("sequelize");
const database = require("./index").sequelize;

const Acolhido = database.define("acolhidos", {
    id_acolhido: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome_acolhido: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    cidade_natural: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    estado_natural: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    cidade_origem: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    estado_origem: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    cpf_acolhido: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
    },
    rg_acolhido: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
    },
    orgao_expedidor_rg: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    data_nascimento: {
        type: Sequelize.STRING(11),
        allowNull: false
    },
    declaracao_racial: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    filiacao_pai: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    filiacao_mae: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    endereco_familiar: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    whatsapp: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    escolaridade_acolhido: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    profissao_acolhido: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    estado_civil_acolhido: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    apoio_familiar: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    contato_familiar: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    filhos_acolhido: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    religiao_acolhido: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
}, {
    timestamps: false
    //createdAt e updatedAt
});

module.exports = Acolhido;
