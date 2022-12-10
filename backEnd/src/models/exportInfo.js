const mongoose = require('mongoose');

const { Schema } = mongoose;

const exportInfo = new Schema({
  eid: {
    type: String,
    required: true,
  },
  exid: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const model = mongoose.model('exportinfomation', exportInfo);

module.exports = model;
