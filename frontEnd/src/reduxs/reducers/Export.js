import * as Type from '../constant/constant';

const innitialState = {
  invoice: [{ customer: [] }],
  status: false,
};

const exportInvoiceRDC = (state = innitialState, { type, payload }) => {
  switch (type) {
    case Type.FETCH_LIST_EXPORT_SUCCESS:
      const invoice = payload.data;
      const count = payload.count;
      const status = true;
      return { ...state, invoice, count, status };
    case Type.FETCH_LIST_EXPORT_FAIL:
      return state;
    default:
      return state;
  }
};

export default exportInvoiceRDC;
