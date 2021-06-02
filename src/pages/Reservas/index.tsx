import React from 'react';
import { DefaultRootState, useSelector } from 'react-redux';
import { DeleteIcon, Title, CardReservas, ImagemCard, ButtonCard, FooterButton } from './styled';

interface Reserva {
    id: number;
    title: string;
    amount: number;
    image: string;
    status: string;
}

const Reservas: React.FC = () => {

    const reserves = useSelector<Reserva[], Reserva[]>((state: DefaultRootState | any) => state.reserve);

    return (
        <div>
            <Title>Você solicitou {reserves.length} reservas</Title>
            {
                reserves.map((reserva: Reserva, idx: number) => (
                    <CardReservas key={idx + reserva.id}>
                        <ImagemCard src={reserva.image} alt={reserva.title} />
                        <strong>{reserva.title}</strong>
                        <span>Quantildade: {reserva.amount}</span>
                        <ButtonCard type="button" onClick={() => { }}>
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
