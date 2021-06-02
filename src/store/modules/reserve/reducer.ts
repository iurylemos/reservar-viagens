import { AnyAction } from 'redux';
import produce from 'immer';

function reserve(state: Array<any> = [], action: AnyAction): Array<any> {
    // console.log('Chegou?', state)
    switch (action.type) {
        case 'ADD_RESERVE_SUCCESS':
            return produce(state, (draft: any[]) => {
                draft.push(action.trip);
            });
        case 'REMOVE_RESERVE':
            return produce(state, (draft: any[]) => {
                const tripIndex = draft.findIndex(trip => trip.id === action.tripId);

                if (tripIndex >= 0) {
                    draft.splice(tripIndex, 1);
                }
            })

        case 'UPDATE_RESERVE': {

            if (action.amount <= 0) {
                return state;
            }

            return produce(state, (draft: any[]) => {
                const tripIndex = draft.findIndex(trip => trip.id === action.tripId);

                if (tripIndex >= 0) {
                    draft[tripIndex].amount = Number(action.amount);
                }
            })
        }
        default:
            return state;
    }
}

export { reserve };
