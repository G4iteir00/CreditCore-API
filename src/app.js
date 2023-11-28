// app.js
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import routes from "./routes/index.router.js";
import { options } from "./config/swagger.config.js";
import cors from 'cors';
import mongoose from "mongoose";
import { mongodbConfig } from "./config/mongodb.config.js";

const app = express();

const specs = swaggerJsdoc(options);
const corsOptions = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    origin: '*', // Permitir todas as origens
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

mongoose.connect(mongodbConfig.baseUrl)
    .then(() => console.log('Conexão com o MongoDB estabelecida com sucesso'))
    .catch(err => console.error('Erro ao conectar com o MongoDB', err));

routes(app);

export default app;
