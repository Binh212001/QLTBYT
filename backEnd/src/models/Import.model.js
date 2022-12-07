const mongoose = require('mongoose');

const costomerSchema = require('./Customer.model');
const equitmentSchema = require('./Equitment.model');
const { Schema } = mongoose;

const importSchema = new Schema({
  id: {
    type: Number,
    require: true,
  },
  customerId: { type: Number, ref: 'customer' },
  product: {
    product: [{ type: Schema.Types.ObjectId, ref: 'equitment' }],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const model = mongoose.model('import', importSchema);

module.exports = model;
