import React from 'react';
import { DeleteIcon, Title, CardReservas, ImagemCard, ButtonCard, FooterButton } from './styled';

const Reservas: React.FC = () => {

    return (
        <div>
            <Title>Você solicitou 1 reserva</Title>
            <CardReservas>
                <ImagemCard src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg" alt="Macio" />
                <strong>Viagem Maceio 7 Dias</strong>
                <span>Quantildade: 2</span>
                <ButtonCard type="button" onClick={() => { }}>
                    <DeleteIcon />
                </ButtonCard>
            </CardReservas>

            <footer>
                <FooterButton type="button">Solicitar Reservas</FooterButton>
            </footer>
        </div>
    );
}


export default Reservas;
