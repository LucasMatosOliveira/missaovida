const usuarioController = require('../controllers/usuarioController');

async function userRoutes(fastify, options) {
    // Rota para atualizar um paciente existente
    fastify.put('/Usuario', {
        schema: {
            description: 'Atualiza um Usuário existente',
            tags: ['Usuario'],
            consumes: ['application/json'],
            produces: ['application/json'],
            body: {
                type: 'object',
                properties: {
                    username: { type: 'string' },
                    password: { type: 'string' }
                },
                required: ['username', 'password']
            },
            response: {
                200: {
                    description: 'Usuário atualizado com sucesso',
                    type: 'null'
                },
                400: {
                    description: 'Erro ao atualizar usuário',
                    type: 'object',
                    properties: {
                        error: { type: 'string' }
                    }
                }
            }
        },
        preHandler: [fastify.authenticate],
        handler: usuarioController.updateUsuario
    });

    // Rota para obter todos os pacientes
    fastify.get('/Usuarios', {
        schema: {
            description: 'Obtém a lista de todos os usuários',
            tags: ['Usuario'],
            response: {
                200: {
                    description: 'Lista de usuários recuperada com sucesso',
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            username: { type: 'string' },
                            password: { type: 'string' }
                        }
                    }
                },
                400: {
                    description: 'Erro ao obter usuários',
                    type: 'object',
                    properties: {
                        error: { type: 'string' }
                    }
                }
            }
        },
        preHandler: [fastify.authenticate],
        handler: usuarioController.getUsuarios
    });

    // Rota para obter um paciente por ID
    fastify.get('/Usuario/:id', {
        schema: {
            description: 'Obtém um usuário pelo ID',
            tags: ['Usuario'],
            params: {
                type: 'object',
                properties: {
                    id: { type: 'string' }
                },
                required: ['id']
            },
            response: {
                200: {
                    description: 'Usuário recuperado com sucesso',
                    type: 'object',
                    properties: {
                        username: { type: 'string' },
                        password: { type: 'string' }
                    }
                },
                404: {
                    description: 'Usuário não encontrado',
                    type: 'object',
                    properties: {
                        message: { type: 'string' }
                    }
                },
                400: {
                    description: 'Erro ao obter usuário',
                    type: 'object',
                    properties: {
                        error: { type: 'string' }
                    }
                }
            }
        },
        preHandler: [fastify.authenticate],
        handler: usuarioController.getUsuarioById
    });
}

module.exports = userRoutes;