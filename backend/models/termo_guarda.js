const Sequelize = require("sequelize");
const database = require("./index").sequelize;
const Acolhidos = require("./acolhido");

const Guarda = database.define("termo_guarda", {
    id_termo_guarda: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    autorizacao_guarda: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    documentos_guardados: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    descricao_carteira: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    recurso_especie: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    },
    aparelho_celular: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    outros_objetos: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
}, {
    timestamps: false
    //createdAt e updatedAt
});

Acolhidos.hasMany(Guarda, { foreignKey: 'id_acolhido' });
Guarda.belongsTo(Acolhidos, { foreignKey: 'id_acolhido' });

module.exports = Guarda;
