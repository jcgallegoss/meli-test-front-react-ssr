import fetch from 'isomorphic-unfetch'

const getItemsProps = async (req) =>{
  let resObj = {};
  try {
    const baseUrl = `${req.protocol}://${req.get('Host')}`;
    const res = await fetch(`${baseUrl}/api/items?q=${req.query.search}`);
    const data = await res.json();
    if (data.error) throw Error ('Error en el servicio /items?q=');
    
    resObj = { props: { items: data, title: req.query.search } };

  } catch (e) {
    resObj = { redirect: { destination: '/', permanent: false } };
  }  
  return resObj
} 

export {
  getItemsProps
};
