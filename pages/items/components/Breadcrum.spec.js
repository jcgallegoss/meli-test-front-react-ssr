import React from 'react'
import { render, screen } from '@testing-library/react'
import Breadcrum from './Breadcrum'
import { ID_COMPONENT_BREADCRUM, BREADCRUMS, NO_BREADCRUMS } from '../../../mocks/constants'

describe('Breadcrum.js', () => {
  
  test('TEST 1: Valida que exista el componente de breadcrums', async () => {
    await render(<Breadcrum breadcrums={BREADCRUMS}/>);
    const element = await screen.getByTestId(ID_COMPONENT_BREADCRUM);
    expect(element).toBeInTheDocument();
  });

  test('TEST 2: Valida que no exista exista el componente de breadcrums', async () => {
    await render(<Breadcrum breadcrums={NO_BREADCRUMS}/>);
    const element = await screen.getByTestId(ID_COMPONENT_BREADCRUM);
    expect(element).toHaveTextContent('');
  });

});