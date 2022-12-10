const Customer = require('../models/Customer.model');
const pagination = require('../utils/pagination');

const getListC = async (page) => {
  try {
    const value = await Customer.find({})
      .skip((await pagination(page)).skip)
      .limit((await pagination(page)).limit);
    return value;
  } catch (error) {
    throw new Error(error);
  }
};

// getEById

const getCById = async (id) => {
  try {
    if (id) {
      const idParserInt = parseInt(id);

      return await Customer.find({ id: idParserInt });
    } else {
      return;
    }
  } catch (error) {
    throw new Error(error);
  }
};

//postE

const postC = async (data) => {
  try {
    const EQM = new Customer(data);
    await EQM.save();
    return EQM;
  } catch (error) {
    throw new Error(error);
  }
};

//putE

const putC = async (data) => {
  try {
    const EQM = await Customer.findOneAndUpdate({ id: data.id }, data, {
      new: true,
    });

    return EQM;
  } catch (error) {
    throw new Error(error);
  }
};

//delE

const delC = async (id) => {
  try {
    if (id) {
      const idParserInt = parseInt(id);
      return await Customer.remove({ id: idParserInt });
    } else {
      return;
    }
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getListC, getCById, postC, putC, delC };
