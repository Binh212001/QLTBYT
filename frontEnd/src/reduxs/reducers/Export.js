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

    case Type.FIND_EXPORT_BY_ID:
      const x = state.invoice.filter((x) => x.id === parseInt(payload));
      return { invoice: x };
    default:
      return state;
  }
};

export default exportInvoiceRDC;
