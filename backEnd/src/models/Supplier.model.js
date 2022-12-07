const mongoose = require('mongoose');

const { Schema } = mongoose;

const supplierSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const model = mongoose.model('supplier', supplierSchema);

module.exports = model;
