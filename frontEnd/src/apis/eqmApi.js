import apiInstance from './apiInstance';

const eqmApi = {
  fetchListEqm: (page) => {
    return apiInstance.get('/equitment/' + page);
  },
  fetchEqmById: (id) => {
    return apiInstance.get('/equitment/item/' + id);
  },
  postEqm: (data) => {
    return apiInstance.post('/equitment', data);
  },
  putEqm: (data) => {
    return apiInstance.put('/equitment/' + data.id, data);
  },
  delEqm: (id) => {
    return apiInstance.delete('/equitment/' + id);
  },
};

export default eqmApi;
