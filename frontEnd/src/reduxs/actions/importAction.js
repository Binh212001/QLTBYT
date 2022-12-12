import importApi from '../../apis/importApi';
import * as Type from '../constant/constant';

export const fetchListInvoiceStart = () => {
  return async (dispatch) => {
    return importApi
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
    type: Type.FETCH_LIST_IMPORT_SUCCESS,
    payload: data,
  };
};

export const fetchListInvoiceFail = () => {
  return {
    type: Type.FETCH_LIST_IMPORT_FAIL,
  };
};

export const findImportById = (name) => {
  return {
    type: Type.FIND_IMPORT_BY_ID,
    payload: name,
  };
};
