const mongoose = require('mongoose');
const { Schema } = mongoose;

const equitmentSchema = new Schema({
  id: {
    type: Number,
    required: true,
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

  size: {
    type: String,
  },
  func: {
    type: String,
  },
  quantyty: {
    type: Number,
  },
});

const model = mongoose.model('equitment', equitmentSchema);

module.exports = model;
