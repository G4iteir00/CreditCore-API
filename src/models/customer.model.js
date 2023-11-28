// models/Customer.js
import mongoose from 'mongoose';
import customerSchema from '../schemas/customer/customer.schema.js';

const CustomerModel = mongoose.model('Customer', customerSchema);

export default CustomerModel;
