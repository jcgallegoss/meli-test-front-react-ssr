// (function() {

//   'use strict';
  
//   const app = require('./app');
//   const port = process.env.PORT || 3000;
  
//   app.listen(port, ()=>{
//     console.log(`Server on: http://localhost: ${port}`);
//   });
  
// }());  




const express = require("express");
const next = require('next');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "prodction";
const app = next({ dev });
const handle = app.getRequestHandler();
const apiRoutes = require('./routes');
  
const server = express();     
app
  .prepare()
  .then(() => {
    
    server.use(apiRoutes);
    
    server.get('/', (req, res) => {
      return app.render(req, res, '/home/Home');
    })
    
    server.get('/items', (req, res) => {
      return app.render(req, res, '/items/Items', req.query);
    })
    
    server.get('/items/:id', (req, res) => {
      return app.render(req, res, `/item/Item`, req.params);
    })

    server.all('*', (req, res) => {
      return handle(req, res)
    })
    
    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`Runnning on http://localhost:${PORT}`);
    });
    
  })
  .catch(ex => {
    console.error(ex.stack);
    procces.exit(1)
});

module.exports = server;