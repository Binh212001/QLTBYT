import apiInstance from './apiInstance';

const supApi = {
  fetchListSup: () => {
    return apiInstance.get('/supplier');
  },
  fetchSupById: (id) => {
    return apiInstance.get('/supplier/' + id);
  },
  postSup: (data) => {
    return apiInstance.post('/supplier', data);
  },
  putSup: (data) => {
    return apiInstance.put('/supplier/' + data.id, data);
  },
  delSup: (id) => {
    return apiInstance.delete('/supplier/' + id);
  },
};

export default supApi;
