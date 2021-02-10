import React from 'react'
import { render, screen } from '@testing-library/react'
import Item, { getServerSideProps } from './Item'
import { createRequest } from 'node-mocks-http'
import { getItemProps } from './Item.controller'
import { ID_COMPONENT_ITEM, OBJ_ITEM, ITEM_ID, VACIO } from '../../mocks/constants'

describe('Items.js', () => {

  test('TEST 1: valida que obtenga los props del componente', async () => {   
    const req  = await createRequest({
      protocol: 'http',
      headers:{ host: 'localhost:3000'},
      params: {
        id: ITEM_ID
      }
    });
    const response = await getServerSideProps({req});
    expect(response).toBeDefined();
  });
  
  test('TEST 2: Valida un error al obtener props de un producto ', async () => {
    try {
      const req  = await createRequest({
        protocol: 'http',
        headers:{ host: 'localhost:3000'},
        params: {
          id: VACIO
        }
      });
      await getItemProps(req);
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  test('TEST 3: Valida que se muestre el detalle de un producto', () => {
    render(<Item item={OBJ_ITEM} title={OBJ_ITEM.title}/>);
    const element = screen.getByTestId(ID_COMPONENT_ITEM);
    expect(element).toBeInTheDocument();
  });
  
});