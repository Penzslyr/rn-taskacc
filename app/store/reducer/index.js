import { combineReducers } from 'redux';

import dataProfile from './dataProfile';
import dataTask from './dataTask'

const rootReducer = combineReducers({ dataProfile, dataTask });
export default rootReducer;
