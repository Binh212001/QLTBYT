const httpStatusCode = require('../config/constant');
const { getListE, getEById, postE, putE, delE } = require('../services/equitment.service');
const Eqm = require('../models/Equitment.model');

//@ getAll;
const getAll = async (req, res) => {
  const { page } = req.params;

  try {
    const result = await getListE(page);
    const count = await Eqm.countDocuments({});

    return res.json({ result, count });
  } catch (error) {
    return res.json(httpStatusCode.INTERNAL_SERVER).json({
      message: error.message,
    });
  }
};
// @ getById;
const getById = async (req, res) => {
  try {
    const result = await getEById(req.params.id);
    return res.status(httpStatusCode.SUCCESS).json(result);
  } catch (error) {
    return res.status(httpStatusCode.INTERNAL_SERVER).json({
      message: error.message,
    });
  }
};
//@ postEquiment;
const postEquiment = async (req, res) => {
  try {
    const result = await postE(req.body);
    return res.status(httpStatusCode.SUCCESS).json(result);
  } catch (error) {
    return res.status(httpStatusCode.INTERNAL_SERVER).json({
      message: error.message,
    });
  }
};

//@ removeEquiment;
const removeEquiment = async (req, res) => {
  try {
    const result = await delE(req.params.id);
    return res.status(httpStatusCode.SUCCESS).json({ result, message: 'Deleted' });
  } catch (error) {
    return res.status(httpStatusCode.INTERNAL_SERVER).json({
      message: error.message,
    });
  }
};

// @ updateEquiment
const updateEquiment = async (req, res) => {
  try {
    const result = await putE(req.body);
    return res.status(httpStatusCode.SUCCESS).json(result);
  } catch (error) {
    return res.status(httpStatusCode.INTERNAL_SERVER).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAll,
  getById,
  postEquiment,
  removeEquiment,
  updateEquiment,
};
