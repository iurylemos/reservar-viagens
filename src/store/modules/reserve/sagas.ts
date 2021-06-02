import { AxiosResponse } from 'axios';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { api } from '../../../services/api_service';
import { addReserveSuccess } from './actions';

type Params = {
    tripId: number
}

function* addToReserve({ tripId }: Params) {
    try {
        const response: AxiosResponse = yield call(api.get, `trips/${tripId}`);
        yield put(addReserveSuccess(response.data));
    } catch (error) {

    }
}

export default all([
    takeLatest('ADD_RESERVE_REQUEST' as any, addToReserve)
]);