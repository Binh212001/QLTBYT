import exportApi from '../../apis/exportApi';
import * as Type from '../constant/constant';

export const fetchListInvoiceStart = () => {
  return async (dispatch) => {
    return exportApi
      .fetchListInvoice()
      .then((data) => {
        console.log(data);

        dispatch(fetchListInvoiceSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchListInvoiceFail());
      });
  };
};

export const fetchListInvoiceSuccess = (data) => {
  return {
    type: Type.FETCH_LIST_EXPORT_SUCCESS,
    payload: data,
  };
};

export const fetchListInvoiceFail = () => {
  return {
    type: Type.FETCH_LIST_EXPORT_FAIL,
  };
};
