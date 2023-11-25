
class CustomerController {

    static findCustomers = (req, res) => {
        // find customer
        res.send('Buscar cliente');
    }

    static findCustomersById = (req, res) => {
        // findCustomersById
        res.send('Buscar cliente Por Id')
    }

    static createCustomer = (req, res) => {
        // createCustomer
        res.send('Criar cliente')
    }

    static updateCustomer = (req, res) => {
        // updateCustomer
        res.send('Atualizar cliente')
    }

    static deleteCustomer = (req, res) => {
        // deleteCustomer
        res.send('Deletar cliente')
    }


}

export default CustomerController;