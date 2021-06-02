import styled from 'styled-components';
import { Flight } from '@styled-icons/material';

const FlightLock = styled(Flight)`
  color: #FFF;
  font-weight: bold;
  width: 30px;
`;

const Box = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    list-style: none;
`;

const Item = styled.li`
    display: flex;
    flex-direction: column;
    background: #FFF;
    border-radius: 4px;
    padding: 13px;
`;

const CapaImage = styled.img`
    max-width: 19em;
    max-heigth: 19em;
    border-radius: 4px;
`;

const BoxTitle = styled.strong`
    font-size: 16px;
    line-heigth: 20px;
    color: #191919;
    margin-top: 10px;
`;

const Button = styled.button`
    margin-top: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    background: #191919;
    border: 0;
    border-radius: 4px;
`;

const WrapperIcon = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
`;

export { FlightLock, Box, Item, CapaImage, BoxTitle, Button, WrapperIcon }