const mongoose = require('mongoose');

const { Schema } = mongoose;

const importInfo = new Schema({
  eid: {
    type: String,
    required: true,
  },
  imid: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    require: true,
  },
});

const model = mongoose.model('importinfomation', importInfo);

module.exports = model;
