import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
    padding: 10px 10px;
`;

const ImgHeader = styled.img`
    max-width: 110px;
    max-height: 110px;
`;

const LinkReservas = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
`;

const DivReserva = styled.div`
    text-align: right;
    margin-right: 10px;
`;

const StrongReserva = styled.strong`
    color: #fff;
    display: block;
`;

const SpanReserva = styled.span`
    color: #DDD;
    font-size: 15px;
`;

export { HeaderContainer, ImgHeader, LinkReservas, DivReserva, StrongReserva, SpanReserva };