// index.route.js
import express from "express";
import customerRouter from "./customer.router.js";

/**
 * @openapi
 * /:
 *   get:
 *     summary: Retorna uma mensagem de Hello World
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 titulo:
 *                   type: string
 *                   example: Hello World
 */
const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Hello World"})
  })

  app.use(
    express.json(),
    customerRouter
  )
}

export default routes;