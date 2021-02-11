# meli-test-front-react-ssr

Aplicación tipo Server Side Redering (SSR) creada con ReactJS + NextJS + Express + Jest + SASS, CI/CD para Cloud Microsoft Azure
Esta simula un mini Mercado Libre en el cual puedes buscar productos desde el input de búsqueda principal,
visualizar los productos encontrados y acceder a su vista de detallada.

## Ver en
#### [https://meli-test-front-react-ssr.azurewebsites.net](https://meli-test-front-react-ssr.azurewebsites.net)


## Instrucciones de uso

Clonar proyecto y ejecutar los siguientes comando en el terminar

```bash
npm i # Instala dependencias 
npm run start # Levanta aplicación en puerto 3000 
```

## Run Jest Tests

```bash
npm run test
```

## Run Dev mode

```bash
npm run dev
```


# Endpoints

A continuación se muestran los endpoint creados para consultar los pructos y obtener un producto detallado.

```bash
npm run dev
```

## /api/items?q=query

Retorna los productos de Mercado Libre.

```http
GET https://meli-test-front-react-ssr.azurewebsites.net/api/items?q=query
o
GET http://localhost:3000/api/items?q=query
```

### Examples Request
```bash
GET http://localhost:3000/api/items?q=iphone
GET http://localhost:3000/api/items?q=mac
o
GET https://meli-test-front-react-ssr.azurewebsites.net/api/items?q=laptop
```

### Response
```json
{
  "author": {
    "name": "",
    "lastname": ""
  },
  "categories": [
    "Celulares y Teléfonos",
    "Celulares y Smartphones"
  ],
  "items": [
    {
      "id": "MLA903945107",
      "title": "iPhone 11 64 Gb (product)red",
      "price": {
          "currency": "ARS",
          "amount": "159,000"
      },
      "picture": "http://http2.mlstatic.com/D_751765-MLA43654417389_102020-I.jpg",
      "condition": "Nuevo",
      "state": "Santa Fe",
      "free_shipping": true
    },
    {
      "id": "MLA900663078",
      "title": "iPhone SE (2nd Generation) 64 Gb Negro",
      "price": {
          "currency": "ARS",
          "amount": "92,700"
      },
      "picture": "http://http2.mlstatic.com/D_762949-MLA42320762601_062020-I.jpg",
      "condition": "Nuevo",
      "state": "Santa Fe",
      "free_shipping": true
    },
    {
      "id": "MLA896547636",
      "title": "iPhone 7 32 Gb Oro",
      "price": {
          "currency": "ARS",
          "amount": "71,999"
      },
      "picture": "http://http2.mlstatic.com/D_948813-MLA31003000773_062019-I.jpg",
      "condition": "Nuevo",
      "state": "Capital Federal",
      "free_shipping": true
    },
    {
      "id": "MLA897395878",
      "title": "iPhone 11 Pro Max 64 Gb Plata",
      "price": {
          "currency": "ARS",
          "amount": "249,099"
      },
      "picture": "http://http2.mlstatic.com/D_620546-MLA32445355354_102019-I.jpg",
      "condition": "Nuevo",
      "state": "Capital Federal",
      "free_shipping": true
    }
  ]
}
```

## /api/items/:id 

Retorna el detalle de un producto especifico de Mercado Libre.

```http
GET https://meli-test-front-react-ssr.azurewebsites.net/api/items/:id
o
GET http://localhost:3000/api/items/:id 
```

### Examples Request
```bash
GET http://localhost:3000/api/items/MLA903945107
GET http://localhost:3000/api/items/MLA900663078
o
GET https://meli-test-front-react-ssr.azurewebsites.net/api/items/MLA896547636
```

### Response
```json
{
    "author": {
        "name": "",
        "lastname": ""
    },
    "item": {
        "id": "MLA904218049",
        "title": "iPod 80 Gb Usado ",
        "price": {
            "currency": "ARS",
            "amount": "6,500"
        },
        "picture": "http://http2.mlstatic.com/D_719555-MLA44582786822_012021-I.jpg",
        "condition": "Usado",
        "free_shipping": false,
        "sold_quantity": "0",
        "description": "Ipod 80 gb usado, buen funcionamiento"
    }
}
```