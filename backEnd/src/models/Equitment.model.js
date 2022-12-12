const mongoose = require('mongoose');
const { Schema } = mongoose;

const equitmentSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
  quantyty: {
    type: Number,
    default: 0,
  },
});

const model = mongoose.model('equitment', equitmentSchema);

module.exports = model;
