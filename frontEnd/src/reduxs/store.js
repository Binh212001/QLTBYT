import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import EQMReducer from './reducers/EQMReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import cusRDC from './reducers/CusReducer';
import supRDC from './reducers/SupREducer';
import eqmRdc from './reducers/EQMReducer';
import exportInvoiceRDC from './reducers/Export';
const rootReducer = combineReducers({
  equitment: EQMReducer,
  customer: cusRDC,
  supplier: supRDC,
  eqm: eqmRdc,
  export: exportInvoiceRDC,
});

const middleware = [thunk, logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export default store;
