import express from "express";
import CustomerController from "../controllers/customer.controller.js";

const customerRouter = express.Router();

customerRouter
  .get("/customers", CustomerController.findCustomers)
  .get("/customers/:id", CustomerController.findCustomersById)
  .post("/customers", CustomerController.createCustomer)
  .put("/customers/:id", CustomerController.updateCustomer)
  .delete("/customers/:id", CustomerController.deleteCustomer)

export default customerRouter;   