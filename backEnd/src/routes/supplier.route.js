const {
  getAllSup,
  getSupById,
  postSup,
  putSup,
  delSup,
} = require('../controllers/supplier.controller');

const express = require('express');
const router = express.Router();

router.get('/supplier', getAllSup);
router.get('/supplier/:id', getSupById);
router.post('/supplier', postSup);
router.put('/supplier/:id', putSup);
router.delete('/supplier/:id', delSup);
module.exports = router;
