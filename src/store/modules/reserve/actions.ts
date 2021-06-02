export interface ReducerAddOrRemove {
    type: string;
    tripId: number;
}

export interface ReducerUpdate {
    type: string;
    tripId: number;
    amount: number;
}

export function addReserveRequest(id: number): ReducerAddOrRemove {
    return {
        type: 'ADD_RESERVE_REQUEST',
        tripId: id,
    }
}

export function addReserveSuccess(trip: any) {
    return {
        type: 'ADD_RESERVE_SUCCESS',
        trip: trip,
    }
}

export function removeReserve(id: number): ReducerAddOrRemove {
    return {
        type: 'REMOVE_RESERVE',
        tripId: id,
    }
}

export function updateReserveRequest(id: number, amount: number): ReducerUpdate {
    return {
        type: 'UPDATE_RESERVE_REQUEST',
        tripId: id,
        amount: amount,
    }

}
export function updateReserveSuccess(id: number, amount: number): ReducerUpdate {
    return {
        type: 'UPDATE_RESERVE_SUCCESS',
        tripId: id,
        amount: amount,
    }
}