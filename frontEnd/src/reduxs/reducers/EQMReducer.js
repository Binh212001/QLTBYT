import * as Type from '../constant/constant';

const innitialState = {
  eqm: [],
  count: 0,
  status: false,
};

const eqmRdc = (state = innitialState, { type, payload }) => {
  switch (type) {
    case Type.FETCH_LIST_EQM_SUCCESS:
      const eqm = payload.result;
      const count = payload.count;
      const status = true;
      return { ...state, eqm, count, status };
    case Type.FETCH_LIST_EQM_FAIL:
      return state;

    case Type.FIND_EQM_BY_ID:
      const x = state.eqm.filter((x) => x.id.toLowerCase().includes(payload.toLowerCase()) === 1);
      return { eqm: x };
    default:
      return state;
  }
};

export default eqmRdc;
