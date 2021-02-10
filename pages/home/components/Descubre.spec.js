import React from 'react'
import { render, screen } from '@testing-library/react'
import Descubre from './Descubre'
import { ID_COMPONENT_DESCUBRE } from '../../../mocks/constants'

describe('Descubre.js', () => {
  
  test('TEST 1: Valida que exista el componente', async () => {
    await render(<Descubre />);
    const element = await screen.getByTestId(ID_COMPONENT_DESCUBRE);
    expect(element).toBeInTheDocument();
  });

});