const mongoose = require('mongoose');

const { Schema } = mongoose;

const customerSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
});

const model = mongoose.model('customer', customerSchema);

module.exports = model;
