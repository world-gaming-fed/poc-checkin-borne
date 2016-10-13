import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import event from './event';

const rootReducer = combineReducers({
  event,
  routing
});

export default rootReducer;
