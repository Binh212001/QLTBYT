const auth = require('./auth.route');
const equitment = require('./equitment.route');
const customer = require('./customer.route');
const supplier = require('./supplier.route');
const uploadRoute = require('./upload.route');
const exportInvoice = require('./export.route');
const importInvoice = require('./import.route');

const routes = (app) => {
  app.use('/auth', auth);
  app.use('/', equitment);
  app.use('/', customer);
  app.use('/', supplier);
  app.use('/upload', uploadRoute);
  app.use('/', exportInvoice);
  app.use('/', importInvoice);
};

module.exports = routes;
