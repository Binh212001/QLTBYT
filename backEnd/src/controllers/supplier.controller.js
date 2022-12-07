const httpStatusCode = require('../config/constant');
const {
  getListS,
  getSById,
  postS,
  putS,
  delS,
} = require('../services/supplier.service');
const Suppiler = require('../models/Supplier.model');

const getAllSup = async (req, res) => {
  try {
    const result = await getListS();
    const count = await Suppiler.countDocuments({});
    return res.json({ result, count });
  } catch (error) {
    return res.status(httpStatusCode.INTERNAL_SERVER).json({
      message: error.message,
    });
  }
};
const getSupById = async (req, res) => {
  try {
    const result = await getSById(req.params.id);
    return res.status(httpStatusCode.SUCCESS).json(result);
  } catch (error) {
    return res.status(httpStatusCode.INTERNAL_SERVER).json({
      message: error.message,
    });
  }
};
const postSup = async (req, res) => {
  try {
    const result = await postS(req.body);
    return res.status(httpStatusCode.SUCCESS).json(result);
  } catch (error) {
    return res.status(httpStatusCode.INTERNAL_SERVER).json({
      message: error.message,
    });
  }
};
const putSup = async (req, res) => {
  try {
    const result = await putS(req.body);
    return res.status(httpStatusCode.SUCCESS).json(result);
  } catch (error) {
    return res.status(httpStatusCode.INTERNAL_SERVER).json({
      message: error.message,
    });
  }
};
const delSup = async (req, res) => {
  try {
    const result = await delS(req.params.id);
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
  getAllSup,
  getSupById,
  postSup,
  putSup,
  delSup,
};
