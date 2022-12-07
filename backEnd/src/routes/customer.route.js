const {
  getAllCus,
  getCusById,
  postCus,
  putCus,
  delCus,
} = require('../controllers/customer.controller');

const express = require('express');
const router = express.Router();

router.get('/customer', getAllCus);
router.get('/customer/:id', getCusById);
router.post('/customer', postCus);
router.put('/customer/:id', putCus);
router.delete('/customer/:id', delCus);
module.exports = router;
