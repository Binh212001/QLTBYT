import cusApi from '../../apis/cusApi';
import * as Type from '../constant/constant';

export const fetchListCusStart = (page) => {
  return async (dispatch) => {
    return cusApi
      .fetchListCus(page)
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

export const findCusByName = (name) => {
  return {
    type: Type.FIND_CUSTOMER_BY_NAME,
    payload: name,
  };
};
