import apiInstance from './apiInstance';

const exportApi = {
  fetchListInvoice: () => {
    return apiInstance.get('/export/1');
  },
  fetchInvoiceById: (id) => {
    return apiInstance.get('/equitment/item/' + id);
  },
  fetchInvoiceInformation: (id) => {
    return apiInstance.get('/export/information/' + id);
  },

  delInvoice: (id) => {
    return apiInstance.delete('/equitment/' + id);
  },
};

export default exportApi;
