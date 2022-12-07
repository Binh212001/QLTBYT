const auth = require('./auth.route');
const equitment = require('./equitment.route');
const customer = require('./customer.route');
const supplier = require('./supplier.route');

const routes = (app) => {
  app.use('/auth', auth);
  app.use('/', equitment);
  app.use('/', customer);
  app.use('/', supplier);
};

module.exports = routes;
