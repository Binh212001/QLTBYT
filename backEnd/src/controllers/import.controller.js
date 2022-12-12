const httpStatusCode = require('../config/constant');
const {
  addNewBill,
  getBillById,
  getInfomationBill,
  getAllBill,
  removeBill,
} = require('../services/import.service');

const getAllInvoice = async (req, res) => {
  const { page } = req.params;
  try {
    const result = await getAllBill(page);
    return res.json(result);
  } catch (error) {
    res.status(httpStatusCode.INTERNAL_SERVER).json({
      message: error.message,
    });
  }
};
const getInvoiceById = async (req, res) => {};
const postNewInvoice = async (req, res) => {
  try {
    const result = await addNewBill(req.body);
    return res.json(result);
  } catch (error) {
    res.status(httpStatusCode.INTERNAL_SERVER).json({
      message: error.message,
    });
  }
};
const getInfomationInvoice = async (req, res) => {
  const { id } = req.params;
  console.log('🚀 ~ file: import.controller.js:34 ~ getInfomationInvoice ~ id', id);
  try {
    const result = await getInfomationBill(parseInt(id));
    return res.json(result);
  } catch (error) {
    res.status(httpStatusCode.INTERNAL_SERVER).json({
      message: error.message,
    });
  }
};
const removeInvoice = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await removeBill(parseInt(id));
    return res.json(result);
  } catch (error) {
    res.status(httpStatusCode.INTERNAL_SERVER).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllInvoice,
  getInvoiceById,
  postNewInvoice,
  getInfomationInvoice,
  removeInvoice,
};
