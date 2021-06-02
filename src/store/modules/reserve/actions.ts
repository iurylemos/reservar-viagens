import { Viagem } from "../../../pages/Home";

export interface ReducerRemove {
    type: string;
    tripId: number;
}

export interface ReducerAdd {
    type: string;
    trip: Viagem;
}

export function addReserve(trip: Viagem): ReducerAdd {
    return {
        type: 'ADD_RESERVE',
        trip: trip,
    }
}

export function removeReserve(id: number): ReducerRemove {
    return {
        type: 'REMOVE_RESERVE',
        tripId: id,
    }
}