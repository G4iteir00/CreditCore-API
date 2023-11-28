// routes/customer.router.js
import {Router} from "express";
import CustomerController from "../controllers/customer.controller.js";

const customerRouter = Router();

/**
 * @openapi
 * /customers:
 *   get:
 *     summary: Lista todos os clientes
 *     tags: [Customers]
 *     responses:
 *       200:
 *         description: Uma lista de clientes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Customer'
 */
customerRouter.get("/customers", CustomerController.findCustomers);

/**
 * @openapi
 * /customers/{id}:
 *   get:
 *     summary: Busca um cliente pelo ID
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID único do cliente
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalhes do cliente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 */
customerRouter.get("/customers/:id", CustomerController.findCustomersById);

/**
 * @openapi
 * /customers:
 *   post:
 *     summary: Cria um novo cliente
 *     tags: [Customers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Customer'
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 */
customerRouter.post("/customers", CustomerController.createCustomer);

/**
 * @openapi
 * /customers/{id}:
 *   put:
 *     summary: Atualiza um cliente existente
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID único do cliente
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Customer'
 *     responses:
 *       200:
 *         description: Cliente atualizado com sucesso
 */
customerRouter.put("/customers/:id", CustomerController.updateCustomer);

/**
 * @openapi
 * /customers/{id}:
 *   delete:
 *     summary: Deleta um cliente existente
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID único do cliente
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cliente deletado com sucesso
 */
customerRouter.delete("/customers/:id", CustomerController.deleteCustomer);

export default customerRouter;
