
import { EventEmitter } from 'events';
import { createRequest, createResponse} from 'node-mocks-http'
import { getProducts, getOneProduct } from './products.controller'
import { ITEM_ID, ITEMS_QUERY } from '../../mocks/constants'


describe('products.controller.js', () => {

  test('TEST 1: Valida que regrese los productos', async () => {   
    const req = await createRequest({ query: { q: ITEMS_QUERY} });
    const res = await createResponse({eventEmitter: EventEmitter});
   
    res.on('end', () => {
      const response = res._getData();
      expect(response).toBeDefined();
      done();
    });

     await getProducts(req, res);
  });

  test('TEST 2: Valida que regrese un producto', async () => {   
    const req = await createRequest({ params: { id: ITEM_ID} });
    const res = await createResponse({eventEmitter: EventEmitter});
   
    res.on('end', () => {
      const response = res._getData();
      expect(response).toBeDefined();
      done();
    });

     await getOneProduct(req, res);
  });

});