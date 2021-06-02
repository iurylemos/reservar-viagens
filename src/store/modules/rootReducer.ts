import { CombinedState, combineReducers, Reducer } from 'redux';
import { reserve } from './reserve/reducer';

const combine = (): Reducer<CombinedState<any>> => {
    return combineReducers({
        reserve,
    })
}

export { combine };