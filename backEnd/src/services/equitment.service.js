const Equitment = require('../models/Equitment.model');
const pagination = require('../utils/pagination');
const getListE = async (page) => {
  try {
    return await Equitment.find({ status: true });
  } catch (error) {
    throw new Error(error);
  }
};

// getEById

const getEById = async (id) => {
  try {
    if (id) {
      return await Equitment.findById(id);
    } else {
      return;
    }
  } catch (error) {
    throw new Error(error);
  }
};

//postE

const postE = async (data) => {
  try {
    const EQM = new Equitment(data);
    await EQM.save();
    return EQM;
  } catch (error) {
    throw new Error(error);
  }
};

//putE

const putE = async (data) => {
  try {
    const EQM = await Equitment.findOneAndUpdate({ id: data.id }, data, {
      new: true,
    });

    return EQM;
  } catch (error) {
    throw new Error(error);
  }
};

//delE

const delE = async (id) => {
  try {
    if (id) {
      return await Equitment.findOneAndUpdate({ id }, { status: false });
    } else {
      return;
    }
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getListE, getEById, postE, putE, delE };
