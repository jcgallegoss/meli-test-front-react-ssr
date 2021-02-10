const uri = require('../config.json').wsMeli.uri;
const fetch = require('isomorphic-fetch');

const getItems = async (search) => {
  const data = await fetch(`${uri}/sites/MLA/search?q=${search}`);
  const resJSON = await data.json();

  return resJSON
}

const getItem = async (id) => {
  const data = await fetch(`${uri}/items/${id}`);
  const resJSON = await data.json();

  return resJSON
}

const getItemDescription = async (id) => {
  const data = await fetch(`${uri}/items/${id}/description`);
  const resJSON = await data.json();

  return resJSON
}

module.exports = {
  getItems,
  getItem,
  getItemDescription
}