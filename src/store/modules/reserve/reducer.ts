import { Viagem } from "../../../pages/Home";
import { AnyAction } from 'redux';
import produce from 'immer';

export interface ReducerReserve {
    type: string;
    trip: Viagem;
}

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
        // return [...state, {
        //     ...action.trip,
        //     amount: 1,
        // }];
        default:
            return state;
    }
}

export { reserve };
