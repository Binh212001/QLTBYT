import apiInstance from './apiInstance';

const cusApi = {
  fetchListCus: (page) => {
    return apiInstance.get('/customer/' + page);
  },

  postCus: (data) => {
    return apiInstance.post('/customer', data);
  },
  putCus: (data) => {
    return apiInstance.put('/customer/' + data.id, data);
  },
  delCus: (id) => {
    console.log('🚀 ~ file: cusApi.js:17 ~ id', id);
    return apiInstance.delete('/customer/' + id);
  },
};

export default cusApi;
