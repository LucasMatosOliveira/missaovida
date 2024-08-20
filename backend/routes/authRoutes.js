// routes/authRoutes.js
const authController = require('../controllers/authController');

async function authRoutes(fastify, options) {
    // Rota para registro de usuário
    fastify.post('/register', {
        schema: {
            description: 'Registra novo usuário',
            tags: ['Auth'],
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
                201: {
                    description: 'Usuário registrado com sucesso',
                    type: 'null'
                },
                400: {
                    description: 'Usuário já existe',
                    type: 'object',
                    properties: {
                        error: { type: 'string' }
                    }
                }
            }
        },
        handler: authController.registerUsuario
    });

    // Rota para login de usuário
    fastify.post('/login', {
        schema: {
            description: 'Login do usuário',
            tags: ['Auth'],
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
                201: {
                    description: 'Usuário logado com sucesso',
                    type: 'null'
                },
                400: {
                    description: 'Erro ao logar usuário',
                    type: 'object',
                    properties: {
                        error: { type: 'string' }
                    }
                }
            }
        },
        handler: authController.loginUsuario
    });
}

module.exports = authRoutes;