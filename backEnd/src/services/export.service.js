const exInvoice = require('../models/ExportSchema.model');
const exInfo = require('../models/exportInfo');
const EQM = require('../models/Equitment.model');
const pagination = require('../utils/pagination');

const addNewBill = async (data) => {
  const { id, customerid, invoice } = data;
  try {
    const iv = exInvoice({ id, customerid });
    await iv.save();
    invoice.map(async (x) => {
      const item = new exInfo(x);
      await item.save();
      await EQM.findOneAndUpdate(
        { id: x.eid },
        {
          quantyty: x.amount,
        },
      );
    });
    return iv;
  } catch (error) {
    throw new Error(error).message;
  }
};

const getAllBill = async (page) => {
  try {
    const data = await exInvoice.aggregate([
      {
        $lookup: {
          from: 'customers',
          localField: 'customerid',
          foreignField: 'id',
          as: 'customer',
        },
      },
    ]);

    const count = await exInvoice.countDocuments({});
    return {
      data,
      count,
    };
  } catch (error) {
    throw new Error(error);
  }
};
const getBillById = async () => {};
const removeBill = async (id) => {
  try {
    if (id) {
      return await exInvoice.findOneAndUpdate({ id }, { status: false }, { new: true });
    } else {
      return;
    }
  } catch (error) {
    throw new Error(error);
  }
};

const getInfomationBill = async (id) => {
  try {
    const data = await exInfo.aggregate([
      { $match: { exid: id } },
      {
        $lookup: {
          from: 'equitments',
          localField: 'eid',
          foreignField: 'id',
          as: 'eqm',
        },
      },
    ]);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { addNewBill, getBillById, getAllBill, removeBill, getInfomationBill };
