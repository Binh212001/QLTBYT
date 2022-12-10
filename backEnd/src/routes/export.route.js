const {
  getAllInvoice,
  getInvoiceById,
  postNewInvoice,
  getInfomationInvoice,
  removeInvoice,
} = require('../controllers/export.controller');

const express = require('express');
const router = express.Router();

router.get('/export/:page', getAllInvoice);
router.get('/export/item/:id', getInvoiceById);
router.get('/export/information/:id', getInfomationInvoice);
router.post('/export', postNewInvoice);
router.delete('/export/:id', removeInvoice);

module.exports = router;
