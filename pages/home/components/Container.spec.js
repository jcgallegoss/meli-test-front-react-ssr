import React from 'react'
import { render, screen } from '@testing-library/react'
import Container from './Container'
import { ID_COMPONENT_CONTAINER } from '../../../mocks/constants'

describe('Container.js', () => {
  
  test('TEST 1: Valida que exista el componente', async () => {
    await render(<Container />);
    const element = await screen.getByTestId(ID_COMPONENT_CONTAINER);
    expect(element).toBeInTheDocument();
  });

});