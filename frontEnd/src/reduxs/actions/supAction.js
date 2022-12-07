import supApi from '../../apis/supApi';
import * as Type from '../constant/constant';

export const fetchListSupStart = () => {
  return async (dispatch) => {
    return supApi
      .fetchListSup()
      .then((data) => dispatch(fetchListSupSuccess(data)))
      .catch((err) => {
        dispatch(fetchListSupFail());
      });
  };
};

export const fetchListSupSuccess = (data) => {
  return {
    type: Type.FETCH_LIST_SUP_SUCCESS,
    payload: data,
  };
};

export const fetchListSupFail = () => {
  return {
    type: Type.FETCH_LIST_SUP_FAIL,
  };
};
