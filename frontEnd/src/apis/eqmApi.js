import apiInstance from './apiInstance';

const eqmApi = {
  fetchListEqm: () => {
    return apiInstance.get('/equitment');
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
