const openApiDocs = {
    routePrefix: '/docs',
    exposeRoute: true,
    openapi: {
      info: {
        title: "Missão Vida API",
        description: "Missão Vida Project API",
        version: "1.0.0",
      },
      externalDocs: {
        url: 'https://swagger.io/resources/open-api/',
        description: 'Find more info here'
      },
      servers: [
        { url: 'http://localhost:3333', description: 'Development Server' },
      ],
  
      tags: [
        { name: 'Auth', description: 'Auth related endpoints' },
        { name: 'Usuario', description: 'Usuário related endpoints' },
        { name: 'Acolhido', description: 'Acolhido related endpoints' }
      ],
    },
  };

module.exports = openApiDocs