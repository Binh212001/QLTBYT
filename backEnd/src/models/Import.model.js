const mongoose = require('mongoose');

const { Schema } = mongoose;

const importSchema = new Schema({
  id: {
    type: Number,
    require: true,
    unique: true,
  },
  supplierid: { type: Number, ref: 'supplier' },
  status: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

const model = mongoose.model('import', importSchema);

module.exports = model;
