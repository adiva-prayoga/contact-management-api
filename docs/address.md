# Address API Spec

## Create Address API

Endpoint : POST /api/contacts/:contactId/addresses

Headers :
- Authorization : unique token

Request Body :

```json
{
  "street": "jalan raya",
  "city": "bandung",
  "province": "jawa barat",
  "country": "indonesia",
  "postal_code": "12345",
}
```

Response Body Success :

```json
{
  "data": {
    {
      "id": 1,
      "street": "jalan raya",
      "city": "bandung",
      "province": "jawa barat",
      "country": "indonesia",
      "postal_code": "12345",
    }
  }
}
```

Response Body Error :

```json
{
  "errors": "country is required"
}
```

## Update Address API

Endpoint : PUT /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : unique token

Request Body :

```json
{
  "data": {
    {
      "id": 1,
      "street": "jalan raya",
      "city": "bandung",
      "province": "jawa barat",
      "country": "indonesia",
      "postal_code": "12345",
    }
  }
}
```

Response Body Success :

```json
{
  "street": "jalan raya",
  "city": "bandung",
  "province": "jawa barat",
  "country": "indonesia",
  "postal_code": "12345",
}
```

Response Body Error :

```json
{
  "errors": "country is required"
}
```

## Get Address API

Endpoint : POST /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : unique token


Response Body Success :

```json
{
  "data": {
    {
      "id": 1,
      "street": "jalan raya",
      "city": "bandung",
      "province": "jawa barat",
      "country": "indonesia",
      "postal_code": "12345",
    }
  }
}
```

Response Body Error :

```json
{
  "errors": "contact not found"
}
```

## List Address API

Endpoint : GET /api/contacts/:contactId/addresses

Headers :
- Authorization : unique token

Response Body Success :

```json
{
  "data" : [
    {
      "id" : 1,
      "first_name" : "adiva",
      "last_name" : "prayoga",
      "email" : "adiva@gmail.com",
      "phone" : "3243244324",
    },
    {
      "id" : 2,
      "first_name" : "maru",
      "last_name" : "je",
      "email" : "maruje@gmail.com",
      "phone" : "3243244324",
    }
  ]
}
```

Response Body Error :

```json
{
  "errors": "contact not found"
}
```

## Remove Address API

Endpoint : DELETE /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : unique token

Response Body Success :

```json
{
  "data": "OK"
}
```

Response Body Error :

```json
{
  "errors": "contact not found"
}
```