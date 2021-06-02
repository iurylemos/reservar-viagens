import { Viagem } from "../../../pages/Home";

export interface ReducerRemove {
    type: string;
    tripId: number;
}

export interface ReducerAdd {
    type: string;
    trip: Viagem;
}

export interface ReducerUpdate {
    type: string;
    tripId: number;
    amount: number;
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

export function updateReserve(id: number, amount: number): ReducerUpdate {
    return {
        type: 'UPDATE_RESERVE',
        tripId: id,
        amount: amount,
    }
}