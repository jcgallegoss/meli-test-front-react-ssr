import { currencyFormat, getResObjProducts, getResObjProduct } from './utils'
import { NUM_TO_FORMAT, NUM_TO_DEFAULT } from '../../mocks/constants'
import { RAW_ITEMS_OBJ, RAW_ITEM_OBJ, RAW_ITEM_OBJ_2, RAW_ITEM_DESCRIPTION_OBJ } from '../../mocks/melimocks'

describe('utils.js', () => {

  test('TEST 1: Convierte formato moneda un numero', () => {
    const response = currencyFormat(NUM_TO_FORMAT);
    expect(response).toBe('1,500');
  });

  test('TEST 2: Conviernte numero default 0', () => {
    const response = currencyFormat(NUM_TO_DEFAULT);
    expect(response).toBe('0');
  });

  test('TEST 4: Obtiene un obj de productos para listado', async () => {
    const response = await getResObjProducts(RAW_ITEMS_OBJ);
    expect(response).toBeDefined();
  });

  test('TEST 5: Obtiene un obj de un producto para detalle', async () => {
    const response = await getResObjProduct(RAW_ITEM_OBJ, RAW_ITEM_DESCRIPTION_OBJ);
    expect(response).toBeDefined();
  });

  test('TEST 6: Obtiene un obj de un producto para detalle (usado)', async () => {
    const response = await getResObjProduct(RAW_ITEM_OBJ_2, RAW_ITEM_DESCRIPTION_OBJ);
    expect(response).toBeDefined();
  });
  
});
