const Fastify = require('fastify');
const fastifycors = require('@fastify/cors');
const swagger = require('@fastify/swagger');
const swaggerui = require('@fastify/swagger-ui');
const fastifyJwt = require('@fastify/jwt');
const db = require('./models');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const openApiDocs = require('./openAPI')
const strongPassword = require('./passwordUtils');
const acolhidoRoutes = require('./routes/acolhidoRoutes');



const app = Fastify({ logger: true });
const PORT = process.env.PORT || 3333;

app.register(fastifycors);

app.register(fastifyJwt, {
    secret: strongPassword
});

// Middleware de autenticação
app.decorate("authenticate", async (request, reply) => {
    try {
        await request.jwtVerify();
    } catch (err) {
        reply.send(err);
    }
})

app.register(swagger, openApiDocs);

app.register(swaggerui, openApiDocs);

app.register(acolhidoRoutes, { prefix: '/api' });

app.register(userRoutes, { prefix: '/api' });

app.register(authRoutes, { prefix: '/auth' });

db.sequelize.authenticate()
    .then(() => {
        app.log.info('Connection has been established successfully.');
        return db.sequelize.sync();
    })
    .then(() => {
        app.listen({ port: PORT, host: '0.0.0.0' }, (err) => {
            if (err) {
                app.log.error(err);
                process.exit(1);
            }
            app.log.info(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        app.log.error('Unable to connect to the database:', err);
    });