
const validQueryParams = (req, _res, next) => {
  if (req.query.q) next();
  else next('route'); 
};

module.exports = { validQueryParams }