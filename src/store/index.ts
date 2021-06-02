import { createStore } from 'redux';
import combine from './modules/combineReducer';

const store = createStore(combine);

export default store;