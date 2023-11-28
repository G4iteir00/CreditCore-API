// controllers/customer.controller.js

import CustomerModel from "../models/customer.model.js";

class CustomerController {
    static findCustomers = async (req, res) => {
        try {
            const customers = await CustomerModel.find();
            res.send(customers);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    static findCustomersById = async (req, res) => {
        try {
            const customer = await CustomerModel.findById(req.params.id);
            res.send(customer);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    static createCustomer = async (req, res) => {
        console.log('teste')
        try {
            console.log('req',req?.body)
            const newCustomer = new CustomerModel(req.body);
            const savedCustomer = await newCustomer.save();
            res.status(201).send(savedCustomer);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    static updateCustomer = async (req, res) => {
        try {
            const updatedCustomer = await CustomerModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.send(updatedCustomer);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    static deleteCustomer = async (req, res) => {
        try {
            await CustomerModel.findByIdAndDelete(req.params.id);
            res.status(200).send({ message: 'Cliente deletado com sucesso' });
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default CustomerController;