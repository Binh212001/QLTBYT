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
    default:
      return state;
  }
};

export default supRDC;
