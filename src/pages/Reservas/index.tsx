import React, { Dispatch } from 'react';
import { DefaultRootState, useSelector, useDispatch } from 'react-redux';
import { ReducerRemove, removeReserve } from '../../store/modules/reserve/actions';
import { DeleteIcon, Title, CardReservas, ImagemCard, ButtonCard, FooterButton } from './styled';

interface Reserva {
    id: number;
    title: string;
    amount: number;
    image: string;
    status: string;
}


const Reservas: React.FC = () => {

    const dispatch = useDispatch<Dispatch<ReducerRemove>>();

    const reserves = useSelector<Reserva[], Reserva[]>((state: DefaultRootState | any) => state.reserve);

    function handleRemove(id: number): void {
        dispatch(removeReserve(id));
    }

    return (
        <div>
            <Title>Você solicitou {reserves.length} reservas</Title>
            {
                reserves.map((reserva: Reserva, idx: number) => (
                    <CardReservas key={idx + reserva.id}>
                        <ImagemCard src={reserva.image} alt={reserva.title} />
                        <strong>{reserva.title}</strong>
                        <span>Quantildade: {reserva.amount}</span>
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
