import React from 'react';
import { Link } from 'react-router-dom';
import { LinkReservas, HeaderContainer, ImgHeader, DivReserva, StrongReserva, SpanReserva } from './styled';
import logo from '../../assets/logo.svg';

const Header: React.FC = () => {

    return (
        <HeaderContainer>
            <Link to="">
                <ImgHeader src={logo} alt="Logo Projeto" />
            </Link>
            <LinkReservas to="/reservas">
                <DivReserva>
                    <StrongReserva>Minhas reservas</StrongReserva>
                    <SpanReserva>0 reservas</SpanReserva>
                </DivReserva>
            </LinkReservas>
        </HeaderContainer>
    );
}


export default Header;
