import React from 'react'
import { screen, render } from '@testing-library/react'
import Search from './Search'
import { ID_COMPONENT_SEARCH, ID_SEARCH_INPUT, ID_SEARCH_BTN, ALT_SEARCH_LOGO, ALT_SEARCH_LUPA } from '../../../mocks/constants'

describe('Search.js', () => {
  test('TEST 1: Valida que exista el componente Search', async () => {
    await render(<Search />);
    const element =  await screen.getByTestId(ID_COMPONENT_SEARCH);
    expect(element).toBeInTheDocument();
  });

  test('TEST 2: Valida que exista en pantalla input de busqueda', async () => {
    await render(<Search />);
    const element =  await screen.getByTestId(ID_SEARCH_INPUT);
    expect(element).toBeInTheDocument();
  });

  test('TEST 2: Valida que exista en pantalla img de logo de meli', async () => {
    await render(<Search />);
    const element = await screen.getByAltText(ALT_SEARCH_LOGO);
    expect(element).toBeInTheDocument();
  })

  test('TEST 3: Valida que exista en pantalla input de busqueda', async () => {
    await render(<Search />);
    const element = await screen.getByTestId(ID_SEARCH_BTN);
    expect(element).toBeInTheDocument();
  });

  test('TEST 4: Valida que exista en pantalla boton de busqueda', async () => {
    await render(<Search />);
    const element = await screen.getByAltText(ALT_SEARCH_LUPA);
    expect(element).toBeInTheDocument();
  });

  

});