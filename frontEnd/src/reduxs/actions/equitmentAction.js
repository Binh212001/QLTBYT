import eqmApi from '../../apis/eqmApi';
import * as Type from '../constant/constant';

export const fetchListEqmStart = () => {
  return async (dispatch) => {
    return eqmApi
      .fetchListEqm()
      .then((data) => {
        console.log('🚀 ~ file: equitmentAction.js:9 ~ .then ~ data', data);
        return dispatch(fetchListEqmSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchListEqmFail());
      });
  };
};

export const fetchListEqmSuccess = (data) => {
  return {
    type: Type.FETCH_LIST_EQM_SUCCESS,
    payload: data,
  };
};

export const fetchListEqmFail = () => {
  return {
    type: Type.FETCH_LIST_EQM_FAIL,
  };
};

export const findEQMById = (name) => {
  return {
    type: Type.FIND_EQM_BY_ID,
    payload: name,
  };
};
