import styled from 'styled-components';
import { Delete } from '@styled-icons/material';

const DeleteIcon = styled(Delete)`
    color: #000000;
    font-weight: bold;
    width: 25px;
`;

const Title = styled.h1`
    color: #FFF;
`;

const CardReservas = styled.div`
    padding: 20px;
    margin-bottom: 10px;
    background: #FFF;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ImagemCard = styled.img`
    height: 100px;
`;

const ButtonCard = styled.button`
    border: 0;
    background: #FFF;
`;

const FooterButton = styled.button`
    border: 0;
    display: flex;
    padding: 10px;
    text-transform: uppercase;
    border-radius: 4px;
    margin-top: 10px;
    font-weight: bold;
`;

export { DeleteIcon, Title, CardReservas, ImagemCard, ButtonCard, FooterButton }