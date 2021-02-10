
const currencyFormat = (num) => {
  if(!num || isNaN(num)){
    num = 0;
  }

  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const getResObjProducts = async (data) => {
  const resObj = {
      author: { name: '', lastname: '' },
      categories: [],
      items: []
  };

  // RETORNA SOLO 4 PREODUCTOS
  if(data.results.length > 4) data.results.length = 4;

  // CATEGORIAS
  data.filters.forEach(o => {
    if(o.id === 'category'){
      o.values[0].path_from_root.forEach(c => {
        resObj.categories.push(c.name);
      });
    }
  });

  // ITEMS
  data.results.forEach(o => {
    resObj.items.push({
      id: o.id,
      title: o.title,
      price: {
        currency: o.currency_id,
        amount: currencyFormat(o.price),
      },
      picture: o.thumbnail,
      condition: (o.condition == 'new' ? 'Nuevo' : 'Usado'),
      state: o.seller_address.state.name,
      free_shipping: o.shipping.free_shipping
    })
  });

  return resObj
}


const getResObjProduct = async (info, des) => {
  const resObj = {
    author: { name: '',  lastname: '' },
    item: {
      id: info.id,
      title: info.title,
      price: {
        currency: info.currency_id,
        amount: currencyFormat(info.price),
      },
      picture: info.thumbnail,
      condition: (info.condition == 'new' ? 'Nuevo' : 'Usado'),
      free_shipping: info.shipping.free_shipping,
      sold_quantity: currencyFormat(info.sold_quantity),
      description: des.plain_text
    } 
  }
  return resObj
}

module.exports = { 
  currencyFormat,
  getResObjProducts,
  getResObjProduct
}