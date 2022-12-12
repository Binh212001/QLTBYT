import * as Type from '../constant/constant';

const innitialState = {
  invoice: [{ supplier: [] }],
  status: false,
};

const importInvoiceRDC = (state = innitialState, { type, payload }) => {
  switch (type) {
    case Type.FETCH_LIST_IMPORT_SUCCESS:
      const invoice = payload.data;
      const count = payload.count;
      const status = true;
      return { ...state, invoice, count, status };
    case Type.FETCH_LIST_IMPORT_FAIL:
      return { ...state, status: false };

    case Type.FIND_IMPORT_BY_ID:
      const x = state.invoice.filter((x) => x.id === parseInt(payload));
      return { invoice: x };
    default:
      return state;
  }
};

export default importInvoiceRDC;
