import { createStore } from 'redux';
import { combine } from './modules/rootReducer';

const store = createStore(combine);

export default store;