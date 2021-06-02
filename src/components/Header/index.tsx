import React from 'react';
import { DefaultRootState, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LinkReservas, HeaderContainer, ImgHeader, DivReserva, StrongReserva, SpanReserva } from './styled';
import logo from '../../assets/logo.svg';

const Header: React.FC = () => {

    const reserveSize = useSelector((state: DefaultRootState | any) => state.reserve.length);

    return (
        <HeaderContainer>
            <Link to="">
                <ImgHeader src={logo} alt="Logo Projeto" />
            </Link>
            <LinkReservas to="/reservas">
                <DivReserva>
                    <StrongReserva>Minhas reservas</StrongReserva>
                    <SpanReserva>{reserveSize} reservas</SpanReserva>
                </DivReserva>
            </LinkReservas>
        </HeaderContainer>
    );
}


export default Header;
