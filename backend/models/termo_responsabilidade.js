const Sequelize = require("sequelize");
const database = require("./index").sequelize;
const Acolhidos = require("./acolhido");

const Responsabilidade = database.define("termo_responsabilidade", {
    id_termo_responsabilidade: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    pdf_termo_responsabilidade: {
        type: Sequelize.BLOB,
        allowNull: true
    }
}, {
    timestamps: false
    //createdAt e updatedAt
});

Acolhidos.hasMany(Responsabilidade, { foreignKey: 'id_acolhido' });
Responsabilidade.belongsTo(Acolhidos, { foreignKey: 'id_acolhido' });

module.exports = Responsabilidade;
