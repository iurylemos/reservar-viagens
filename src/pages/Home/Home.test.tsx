import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Home from '.';
import { Provider } from 'react-redux';
import store from '../../store';
import { SWRConfig } from 'swr';

const MockProvider = ({ children }: any) => (
    <Provider store={store}>{children}</Provider>
)

describe('Home', () => {
    test('should present on screen a loader when yet request not finished', async () => {
        //render component
        const { getByText } = render(<MockProvider><Home /></MockProvider>);


        //value to mock new task
        const newTask = 'Carregando...';

        //find for id
        const tdNode = await waitFor(() => getByText(newTask));

        expect(tdNode).toBeDefined();
    });

    test('should not present on screen a loader when yet request finished', async () => {
        //render component
        const { getByText } = render(<MockProvider><Home /></MockProvider>);

        //value to mock new task
        const newTask = 'Carregando...';

        //find for id
        const tdNode = await waitFor(() => getByText(newTask));

        setTimeout(() => {
            expect(tdNode).toBeUndefined();
        }, 2000);
    });
})
