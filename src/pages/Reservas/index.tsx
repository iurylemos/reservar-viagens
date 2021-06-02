import React, { Dispatch } from 'react';
import { DefaultRootState, useSelector, useDispatch } from 'react-redux';
import { ReducerAddOrRemove, removeReserve, updateReserve } from '../../store/modules/reserve/actions';
import { DeleteIcon, Title, CardReservas, ImagemCard, ButtonCard, FooterButton, AddIcon, RemoveIcon, ButtonIcon, AmountButtons, InputAmount } from './styled';

interface Reserva {
    id: number;
    title: string;
    amount: number;
    image: string;
    status: string;
}


const Reservas: React.FC = () => {

    const dispatch = useDispatch<Dispatch<ReducerAddOrRemove>>();

    const reserves = useSelector<Reserva[], Reserva[]>((state: DefaultRootState | any) => state.reserve);

    function handleRemove(id: number): void {
        dispatch(removeReserve(id));
    }

    function decrementAmount(trip: Reserva): void {
        dispatch(updateReserve(trip.id, trip.amount - 1));
    }

    function incrementAmount(trip: Reserva): void {
        dispatch(updateReserve(trip.id, trip.amount + 1));
    }

    return (
        <div>
            <Title>Você solicitou {reserves.length} reservas</Title>
            {
                reserves.map((reserva: Reserva, idx: number) => (
                    <CardReservas key={idx + reserva.id}>
                        <ImagemCard src={reserva.image} alt={reserva.title} />
                        <strong>{reserva.title}</strong>
                        <AmountButtons>
                            <ButtonIcon type='button' onClick={() => decrementAmount(reserva)}>
                                <RemoveIcon />
                            </ButtonIcon>
                            <InputAmount type="text" readOnly value={reserva.amount} />
                            <ButtonIcon type='button' onClick={() => incrementAmount(reserva)}>
                                <AddIcon />
                            </ButtonIcon>
                        </AmountButtons>
                        <ButtonCard type="button" onClick={() => handleRemove(reserva.id)}>
                            <DeleteIcon />
                        </ButtonCard>
                    </CardReservas>
                ))
            }

            <footer>
                <FooterButton type="button">Solicitar Reservas</FooterButton>
            </footer>
        </div>
    );
}


export default Reservas;
