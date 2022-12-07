const mongoose = require('mongoose');

const costomerSchema = require('./Customer.model');
const equitmentSchema = require('./Equitment.model');
const { Schema } = mongoose;

const importSchema = new Schema({
  id: {
    type: Number,
    require: true,
  },
  supplierId: { Number, ref: 'supplier' },
  product: [{ type: Schema.Types.ObjectId, ref: 'equitment' }],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const model = mongoose.model('import', importSchema);

module.exports = model;
