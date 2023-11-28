// schemas/customer.schema.js
import mongoose from 'mongoose';

const phoneSchema = new mongoose.Schema({
    ddd: { type: Number, required: true },
    ddi: { type: Number, required: true },
    number: { type: Number, required: true },
})

 const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: String,
    phone: phoneSchema,
});

export default customerSchema;