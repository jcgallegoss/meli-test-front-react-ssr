import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './Home'
import { ID_COMPONENT_HOME, MSJ_BIENVENIDA } from '../../mocks/constants'


describe('Home.js', () => {
  test('TEST 1: Valida que exista el componente', async () => {
    await render(<Home />);
    const element = await screen.getByTestId(ID_COMPONENT_HOME);
    expect(element).toBeInTheDocument();
  });
  test('TEST 2: Valida que exista mensjae de bienvenida', async () => {
    await render(<Home />);
    const element = await screen.getByText(MSJ_BIENVENIDA);
    expect(element).toBeInTheDocument();
  });

});