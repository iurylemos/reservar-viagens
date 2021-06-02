import { AnyAction } from 'redux';
import produce from 'immer';

function reserve(state: Array<any> = [], action: AnyAction): Array<any> {
    // console.log('Chegou?', state)
    switch (action.type) {
        case 'ADD_RESERVE':
            return produce(state, (draft: any[]) => {
                const tripIndex = draft.findIndex(trip => trip.id === action.trip.id);

                if (tripIndex >= 0) {
                    draft[tripIndex].amount += 1;
                } else {
                    draft.push({
                        ...action.trip,
                        amount: 1,
                    });
                }

            });
        case 'REMOVE_RESERVE':
            return produce(state, (draft: any[]) => {
                const tripIndex = draft.findIndex(trip => trip.id === action.tripId);

                if (tripIndex >= 0) {
                    draft.splice(tripIndex, 1);
                }
            })
        default:
            return state;
    }
}

export { reserve };
