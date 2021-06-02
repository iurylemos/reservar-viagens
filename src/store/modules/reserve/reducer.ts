import { Viagem } from "../../../pages/Home";
import { AnyAction } from 'redux';

export interface ReducerReserve {
    type: string;
    trip: Viagem;
}

function reserve(state: Array<any> = [], action: AnyAction): Array<any> {
    // console.log('Chegou?', state)
    switch (action.type) {
        case 'ADD_RESERVE':
            return [...state, action.trip];
        default:
            return state;
    }
}

export { reserve };
