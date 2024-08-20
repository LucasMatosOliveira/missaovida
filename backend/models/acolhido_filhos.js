const Sequelize = require("sequelize");
const database = require("./index").sequelize;
const Acolhidos = require("./acolhido");

const Filhos = database.define('acolhidoFilhos', {
    id_acolhidos_filhos: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome_filho: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    paga_pensao: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
}, {
    timestamps: false
    //createdAt e updatedAt
});

Acolhidos.hasMany(Filhos, { foreignKey: 'id_acolhido' });
Filhos.belongsTo(Acolhidos, { foreignKey: 'id_acolhido' });

module.exports = Filhos;