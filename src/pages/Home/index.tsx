import React from 'react';
import useSWR from "swr";
import { Box, BoxTitle, CapaImage, FlightLock, Item, Button, WrapperIcon } from './styled';

interface Viagem {
    id: string;
    title: string;
    status: boolean;
    image: string;
}

export function useFetch<Data = any, Error = any>(url: string) {
    const { data, error } = useSWR<Data, Error>(url, async url => {
        const response = await fetch(url);
        const data = await response.json();

        return data;
    });

    return { data, error };
}

const Home: React.FC = () => {

    const { data } = useFetch<Viagem[]>("http://localhost:3333/trips");

    if (!data) {
        return <p>Carregando...</p>;
    }

    return (
        <div>
            <Box>
                {
                    data.map((trip: Viagem) => (
                        <Item key={trip.id}>
                            <CapaImage src={trip.image} alt={trip.title} />
                            <BoxTitle>{trip.title}</BoxTitle>
                            <span>Status: {trip.status ? "Disponível" : "Indisponível"}</span>
                            <Button type='button' onClick={() => { }}>
                                <WrapperIcon>
                                    <FlightLock />
                                </WrapperIcon>
                                <span>SOLICITAR RESERVA</span>
                            </Button>
                        </Item>
                    ))
                }
            </Box>
        </div>
    );
}


export default Home;
