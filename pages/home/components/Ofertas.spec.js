import React from 'react'
import { render, screen } from '@testing-library/react'
import Ofertas from './Ofertas'
import { ID_COMPONENT_OFERTAS } from '../../../mocks/constants'

describe('Ofertas.js', () => {
  
  test('TEST 1: Valida que exista el componente', async () => {
    await render(<Ofertas />);
    const element = await screen.getByTestId(ID_COMPONENT_OFERTAS);
    expect(element).toBeInTheDocument();
  });

});