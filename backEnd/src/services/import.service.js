const imInvoice = require('../models/Import.model');
const imInfo = require('../models/ImportInfor');
const EQM = require('../models/Equitment.model');
const pagination = require('../utils/pagination');

const addNewBill = async (data) => {
  const { id, supplierid, invoice } = data;
  try {
    const iv = imInvoice({ id, supplierid });
    await iv.save();
    invoice.map(async (x) => {
      const item = new imInfo(x);
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
    const data = await imInvoice.aggregate([
      { $match: { status: true } },
      {
        $lookup: {
          from: 'suppliers',
          localField: 'supplierid',
          foreignField: 'id',
          as: 'supplier',
        },
      },
    ]);

    const count = await imInvoice.countDocuments({});
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
      return await imInvoice.findOneAndUpdate({ id }, { status: false }, { new: true });
    } else {
      return;
    }
  } catch (error) {
    throw new Error(error);
  }
};

const getInfomationBill = async (id) => {
  try {
    const data = await imInfo.aggregate([
      { $match: { imid: id } },
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
