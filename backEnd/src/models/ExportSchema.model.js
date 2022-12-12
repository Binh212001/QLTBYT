const mongoose = require('mongoose');
const moment = require('moment');
const { Schema } = mongoose;

const exportSchema = new Schema({
  id: {
    type: Number,
    require: true,
    unique: true,
  },
  customerid: { type: Number, ref: 'customer', require: true },
  status: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    require: true,
    default: new Date(),
  },
});

const model = mongoose.model('export', exportSchema);

module.exports = model;
