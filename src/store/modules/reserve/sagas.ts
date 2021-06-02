import { AxiosResponse } from 'axios';
import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { api } from '../../../services/api_service';
import { addReserveSuccess, updateReserveSuccess } from './actions';

type Params = {
    tripId: number;
    id: number;
    amount: number;
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
            yield put(updateReserveSuccess(tripExist.id, amount));
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

function* updateToReserve({ tripId, amount }: Params) {
    console.log("amount", tripId)
    if (amount <= 0) return;

    const myStock: AxiosResponse = yield call(api.get, `/stock/${tripId}`);

    const stockAmount = myStock.data.amount;

    if (amount > stockAmount) {
        alert('Quantidade máxima antigida');
        return;
    }

    yield put(updateReserveSuccess(tripId, amount));
}

export default all([
    takeLatest('ADD_RESERVE_REQUEST' as any, addToReserve),
    takeLatest('UPDATE_RESERVE_REQUEST' as any, updateToReserve)
]);