const {
  getAllCus,
  getCusById,
  postCus,
  putCus,
  delCus,
  getCusByName,
} = require('../controllers/customer.controller');

const express = require('express');
const router = express.Router();

router.get('/customer', getAllCus);
router.get('/customer/:id', getCusById);

router.post('/customer', postCus);
router.put('/customer/:id', putCus);
router.delete('/customer/:id', delCus);

router.get('/customer/name/:name', getCusByName);

module.exports = router;
