import fetch from 'isomorphic-unfetch'

const getItemProps = async (req) =>{
  let resObj = {};
  try {
    const baseUrl = `${req.protocol}://${req.get('Host')}`;
    const res = await fetch(`${baseUrl}/api/items/${req.params.id}`);
    const data = await res.json();
    if (data.error) throw Error ('Error en el servicio /items:id');

    resObj = { props: { item: data, title: data.item.title } };

  } catch (e) {
    resObj = { redirect: { destination: '/', permanent: false } };
  }  
  return resObj
}

export {
  getItemProps
};
