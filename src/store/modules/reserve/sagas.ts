import { AxiosResponse } from 'axios';
import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { api } from '../../../services/api_service';
import { addReserveSuccess, updateReserve } from './actions';

type Params = {
    tripId: number
}

interface TripSaga {
    id: number;
    title: string;
    status: boolean;
    image: string;
    amount: number;
}


function* addToReserve({ tripId }: Params) {
    try {
        const tripExist: TripSaga = yield select(state => state.reserve.find((trip: TripSaga) => trip.id === tripId))

        const myStock: AxiosResponse = yield call(api.get, `/stock/${tripId}`);

        const stockAmount = myStock.data.amount;

        const currentStock = tripExist ? tripExist.amount : 0;

        const amount = currentStock + 1;

        if (amount > stockAmount) {
            alert('Quantidade máxima antigida');
            return;
        }

        if (tripExist) {
            const amount = tripExist.amount + 1;
            yield put(updateReserve(tripExist.id, amount));
        } else {
            const response: AxiosResponse = yield call(api.get, `trips/${tripId}`);

            const data = {
                ...response.data,
                amount: 1,
            };

            yield put(addReserveSuccess(data));
        }
    } catch (error) {

    }
}

export default all([
    takeLatest('ADD_RESERVE_REQUEST' as any, addToReserve)
]);