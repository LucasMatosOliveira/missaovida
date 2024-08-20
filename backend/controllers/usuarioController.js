const Usuarios = require("../models/usuarios");

const updateUsuario = async (req, reply) => {
    try {
        const {nome, username, password} = req.body;
        await Usuarios.update({ nome, password}, {
            where: { username }
        });
        return reply.status(200).send();
    } catch (error) {
        return reply.status(400).send(error);
    }
};

const getUsuarios = async (req, reply) => {
    try {
        const user = await Usuarios.findAll();
        return reply.send(user);
    } catch (error) {
        return reply.status(400).send(error);
    }
};


const getUsuarioById = async (req, reply) => {
    try {
        const { id } = req.params;
        const user = await Usuarios.findByPk(id);
        
        if (!user) {
            return reply.status(404).send({ message: "Usuário não encontrado" });
        }

        return reply.send(user);
    } catch (error) {
        return reply.status(400).send(error);
    }
};

module.exports = {
    updateUsuario,
    getUsuarios,
    getUsuarioById
};