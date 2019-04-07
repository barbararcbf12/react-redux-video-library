import { combineReducers } from 'redux';
import children from './childrenReducer.js';

const rootReducer = combineReducers({
  children
});

export default rootReducer;
