const {
  getAllInvoice,
  getInvoiceById,
  postNewInvoice,
  getInfomationInvoice,
  removeInvoice,
} = require('../controllers/import.controller');

const express = require('express');
const router = express.Router();

router.get('/import/:page', getAllInvoice);
router.get('/import/item/:id', getInvoiceById);
router.get('/import/information/:id', getInfomationInvoice);
router.post('/import', postNewInvoice);
router.delete('/import/:id', removeInvoice);

module.exports = router;
