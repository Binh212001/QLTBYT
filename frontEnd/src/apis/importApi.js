import apiInstance from './apiInstance';

const importApi = {
  fetchListInvoice: () => {
    return apiInstance.get('/import/1');
  },
  fetchInvoiceById: (id) => {
    return apiInstance.get('/equitment/item/' + id);
  },
  fetchInvoiceInformationProduct: (id) => {
    console.log('🚀 ~ file: importApi.js:11 ~ id', id);
    return apiInstance.get('/import/information/' + id);
  },

  delInvoice: (id) => {
    return apiInstance.delete('/equitment/' + id);
  },
};

export default importApi;
