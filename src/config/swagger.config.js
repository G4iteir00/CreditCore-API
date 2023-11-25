// Configuração do Swagger
export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "CreditCore API",
            version: "1.0.0",
            description: "Uma API de exemplo para operações de crédito"
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Servidor de Desenvolvimento"
            }
        ],
    },
    apis: ["./src/routes/*.js"],
};
