const mongoose = require('mongoose');

const { Schema } = mongoose;

const importSchema = new Schema({
  id: {
    type: Number,
    require: true,
  },
  supplierId: { type: Number, ref: 'supplier' },
  createdAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

const model = mongoose.model('import', importSchema);

module.exports = model;
