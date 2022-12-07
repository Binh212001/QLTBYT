const Supplier = require('../models/Supplier.model');

const getListS = async () => {
  try {
    return await Supplier.find({});
  } catch (error) {
    throw new Error(error);
  }
};

// getEById

const getSById = async (id) => {
  try {
    if (id) {
      const idParserInt = parseInt(id);

      return await Supplier.find({ id: idParserInt });
    } else {
      return;
    }
  } catch (error) {
    throw new Error(error);
  }
};

//postE

const postS = async (data) => {
  try {
    const EQM = new Supplier(data);
    await EQM.save();
    return EQM;
  } catch (error) {
    throw new Error(error);
  }
};

//putE

const putS = async (data) => {
  try {
    const EQM = await Supplier.findOneAndUpdate({ id: data.id }, data, {
      new: true,
    });

    return EQM;
  } catch (error) {
    throw new Error(error);
  }
};

//delE

const delS = async (id) => {
  try {
    if (id) {
      const idParserInt = parseInt(id);
      return await Supplier.remove({ id: idParserInt });
    } else {
      return;
    }
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getListS, getSById, postS, putS, delS };
