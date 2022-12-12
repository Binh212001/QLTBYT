import * as Type from '../constant/constant';

const innitialState = {
  supplier: [],
  count: 0,
  status: false,
};

const supRDC = (state = innitialState, { type, payload }) => {
  switch (type) {
    case Type.FETCH_LIST_SUP_SUCCESS:
      const supplier = payload.result;
      const count = payload.count;
      const status = true;
      return { ...state, supplier, count, status };
    case Type.FETCH_LIST_SUP_FAIL:
      return state;

    case Type.FIND_SUPPLIER_BY_NAME:
      const x = state.supplier.filter(
        (x) => x.name.toLowerCase().includes(payload.toLowerCase()) === 1,
      );

      return { ...state, supplier: x };
    default:
      return state;
  }
};

export default supRDC;
