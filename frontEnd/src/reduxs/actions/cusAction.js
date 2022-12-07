import cusApi from '../../apis/cusApi';
import * as Type from '../constant/constant';

export const fetchListCusStart = () => {
  return async (dispatch) => {
    return cusApi
      .fetchListCus()
      .then((data) => dispatch(fetchListCusSuccess(data)))
      .catch((err) => {
        dispatch(fetchListCusFail());
      });
  };
};

export const fetchListCusSuccess = (data) => {
  return {
    type: Type.FETCH_LIST_CUS_SUCCESS,
    payload: data,
  };
};

export const fetchListCusFail = () => {
  return {
    type: Type.FETCH_LIST_CUS_FAIL,
  };
};
