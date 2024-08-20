const Sequelize = require("sequelize");
const database = require("./index").sequelize;
const Acolhidos = require("./acolhido");

const Alta = database.define("termo_alta", {
    id_termo_alta: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    pdf_termo_alta: {
        type: Sequelize.BLOB,
        allowNull: true
    }
}, {
    timestamps: false
    //createdAt e updatedAt
});

Acolhidos.hasMany(Alta, { foreignKey: 'id_acolhido' });
Alta.belongsTo(Acolhidos, { foreignKey: 'id_acolhido' });

module.exports = Alta;
