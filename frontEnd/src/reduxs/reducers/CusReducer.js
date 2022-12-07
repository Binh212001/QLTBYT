import * as Type from '../constant/constant';

const innitialState = {
  customer: [],
  count: 0,
  status: false,
};

const cusRDC = (state = innitialState, { type, payload }) => {
  switch (type) {
    case Type.FETCH_LIST_CUS_SUCCESS:
      const customer = payload.result;
      const count = payload.count;
      const status = true;
      return { ...state, customer, count, status };
    case Type.FETCH_LIST_CUS_FAIL:
      return state;
    default:
      return state;
  }
};

export default cusRDC;
