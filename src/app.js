// app.js
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import routes from "./routes/index.router.js";
import { options } from "./config/swagger.config.js";

const app = express();
const specs = swaggerJsdoc(options);

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
routes(app);

export default app;
