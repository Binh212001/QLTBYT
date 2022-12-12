const {
  getAll,
  getById,
  postEquiment,
  removeEquiment,
  updateEquiment,
} = require('../controllers/equitment.controller');

const express = require('express');
const router = express.Router();

router.get('/equitment', getAll);
router.get('/equitment/item/:id', getById);
router.post('/equitment', postEquiment);
router.put('/equitment/:id', updateEquiment);
router.delete('/equitment/:id', removeEquiment);

module.exports = router;
