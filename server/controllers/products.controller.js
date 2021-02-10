const utils = require('../utils/utils');
const meliModel = require('../models/meli.model');

const getProducts = async (req, res) => {
  try {
    const products = await meliModel.getItems(req.query.q);
    if ( products.results.length === 0 ) throw Error ('No hay resultados');
    const response = await utils.getResObjProducts(products);
    res.status(200).send(response);
  } catch (e) {
    res.status(400).send({
      error: true,
      status: 'ERROR', 
      e: e.message
    });
  }
}

const getOneProduct = async (req, res) => {
  try {
    const product = await meliModel.getItem(req.params.id);
    const description = await meliModel.getItemDescription(req.params.id);
    const response = await utils.getResObjProduct(product, description);

    res.status(200).send(response);
  } catch (e) {
    res.status(400).send({
      error: true,
      status: 'ERROR', 
      e: e.message
    });
  }
}

module.exports = {
  getProducts,
  getOneProduct
}