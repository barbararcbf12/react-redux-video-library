import { combineReducers } from 'redux';
import videos from './videoReducer';

const rootReducer = combineReducers({
  videos
});

export default rootReducer;
