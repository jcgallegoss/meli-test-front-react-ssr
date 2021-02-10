import React from 'react'
import { render, screen } from '@testing-library/react'
import Items, { getServerSideProps } from './Items'
import { createRequest } from 'node-mocks-http'
import { getItemsProps } from './Items.controller'
import { ID_COMPONENT_ITEMS, OBJ_ITEMS, ITEMS_QUERY, DATO_NULL } from '../../mocks/constants'


describe('Items.js', () => {
  test('TEST 1: valida que obtenga los props del los productos ', async () => {
    const req  = await createRequest({
      protocol: 'http',
      headers:{ host: 'localhost:3000'},
      query: {
        search: ITEMS_QUERY
      }
    });

    const response = await getServerSideProps({req});
    expect(response).toBeDefined();
  });

  test('TEST 2: Valida un error al obtener props de productos ', async () => {
    try {
      const req  = await createRequest({
        protocol: 'http',
        headers:{ host: 'localhost:3000'},
        query: {
          search: DATO_NULL
        }
      });
      await getItemsProps(req);
    } catch (error) {
      console.log('aqui tambien');
      expect(error).toBeDefined();
    }
  });

  test('TEST 2: Valida que exista el listado de productos', async () => {
    await render(<Items items={OBJ_ITEMS} title={OBJ_ITEMS.title}/>);
    const element = await screen.getByTestId(ID_COMPONENT_ITEMS);
    expect(element).toBeInTheDocument();
  });

});