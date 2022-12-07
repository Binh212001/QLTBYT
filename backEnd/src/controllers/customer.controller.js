const httpStatusCode = require('../config/constant');
const {
  getListC,
  getCById,
  postC,
  putC,
  delC,
} = require('../services/customer.service');
const Customer = require('../models/Customer.model');

const getAllCus = async (req, res) => {
  try {
    const result = await getListC();
    const count = await Customer.countDocuments({});
    return res.json({ result, count });
  } catch (error) {
    return res.status(httpStatusCode.INTERNAL_SERVER).json({
      message: error.message,
    });
  }
};

const getCusById = async (req, res) => {
  try {
    const result = await getCById(req.params.id);
    return res.status(httpStatusCode.SUCCESS).json(result);
  } catch (error) {
    return res.status(httpStatusCode.INTERNAL_SERVER).json({
      message: error.message,
    });
  }
};

const postCus = async (req, res) => {
  console.log('🚀 ~ file: customer.controller.js:35 ~ postCus ~ req', req.body);
  try {
    const result = await postC(req.body);
    return res.status(httpStatusCode.SUCCESS).json(result);
  } catch (error) {
    return res.status(httpStatusCode.INTERNAL_SERVER).json({
      message: error.message,
    });
  }
};

const putCus = async (req, res) => {
  try {
    const result = await putC(req.body);
    return res.status(httpStatusCode.SUCCESS).json(result);
  } catch (error) {
    return res.status(httpStatusCode.INTERNAL_SERVER).json({
      message: error.message,
    });
  }
};

const delCus = async (req, res) => {
  try {
    const result = await delC(req.params.id);
    return res
      .status(httpStatusCode.SUCCESS)
      .json({ result, message: 'Deleted' });
  } catch (error) {
    return res.status(httpStatusCode.INTERNAL_SERVER).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllCus,
  getCusById,
  postCus,
  putCus,
  delCus,
};
