import customerSwaggerSchema from "../schemas/customer/customer-swagger.schema.js";

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
                // url: "http://localhost:3000",
                url: "https://congenial-train-7vv9qgv45pqx3x74r-3000.app.github.dev/", // codespace
                description: "Servidor de Desenvolvimento"
            }
        ],
        components: {
            schemas: {
                Customer: {
                    type: 'object',
                    properties: customerSwaggerSchema
                }
            }
        },
    },
    apis: ["./src/routes/*.js"],
};
