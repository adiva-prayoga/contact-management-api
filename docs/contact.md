# Contact API Spec

## Create Contact API

Endpoint : POST /api/contacts

Headers :
- Authorization : unique token

Request Body :

```json
{
  "first_name": "adiva",
  "last_name": "prayoga",
  "email": "prayoga.adiva@gmail.com",
  "phone": "3243244324",
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "first_name": "adiva",
    "last_name": "prayoga",
    "email": "prayoga.adiva@gmail.com",
    "phone": "3243244324",
  }
}
```

Response Body Error :

```json
{
  "errors": "email is not valid format"
}
```

## Update Contact API

Endpoint : PUT /api/contacts/:id

Headers :
- Authorization : unique token

Request Body :

```json
{
  "first_name": "adiva",
  "last_name": "prayoga",
  "email": "prayoga.adiva@gmail.com",
  "phone": "3243244324",
}
```

Response Body Success :

```json
{
  "data" : {
    "id" : 1,
    "first_name" : "adiva",
    "last_name" : "prayoga",
    "email" : "prayoga.adiva@gmail.com",
    "phone" : "3243244324",
  }
}
```

Response Body Error :

```json
{
  "errors": "email is not valid format"
}
```


## Get Contact API

Endpoint : GET /api/contacts/:id

Headers :
- Authorization : unique token

Response Body Success :

```json
{
  "data" : {
    "id" : 1,
    "first_name" : "adiva",
    "last_name" : "prayoga",
    "email" : "prayoga.adiva@gmail.com",
    "phone" : "3243244324",
  }
}
```

Response Body Error :

```json
{
  "errors": "contact not found"
}
```

## Search Contact API

Endpoint : GET /api/contacts

Headers :
- Authorization : unique token

Query params :
- name : Search by first name, using like, optional
- email : Search by email, using like, optional
- phone : Search by phone, using like, optional
- page : number of page, default 1
- size : size per page, default 10

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
  ],
  "paging": {
    "page": 1,
    "total_page": 3,
    "total_item": 30
  }
}
```

Response Body Error :

## Remove Contact API

Endpoint : DELETE /api/contacts/:id

Headers :
- Authorization : unique token

Response Body Success :

```json
{
  "data" : "OK"
}
```

Response Body Error :

```json
{
  "errors": "contact not found"
}
```