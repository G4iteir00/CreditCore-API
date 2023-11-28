// schemas/customer-swagger.schema.js

const phoneSwaggerSchema = {
    ddd: { type: 'number', required: true },
    ddi: { type: 'number', required: true },
    number: { type: 'number', required: true },
};
const customerSwaggerSchema = {
    name: { type: 'string', required: true },
    email: { type: 'string', required: true, unique: true },
    address: { type: 'string' },
    ddd: { type: 'string' },
    ddi: { type: 'string' },
    phone: phoneSwaggerSchema
};

export default customerSwaggerSchema;