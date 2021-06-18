# p2-cms-customer-server
API for cms and customer websites.
This app has :
* RESTful endpoint for asset's CRUD operation
* JSON formatted response 

## RESTful endpoints
---
## Endpoint: /companies
### GET /companies
> Get all companies

_Request Header_
```
needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "company": [
    {
      "id": 1,
      "name": "Toyota",
      "companyLogo": "https://www.toyota.astra.co.id/sites/default/files/2019-11/fit-tc-logo.jpeg",
      "location": "Jepang",
      "email": "toyota@mail.com",
      "description": "Perusahaan mobil",
      "createdAt": "2021-06-08T12:03:44.390Z",
      "updatedAt": "2021-06-08T12:03:44.390Z"
    },
    {
      "id": 2,
      "name": "Yamaha",
      "companyLogo": "https://i.pinimg.com/originals/e2/d9/c0/e2d9c066cf0f8addb0f2788627775dd9.jpg",
      "location": "Jepang",
      "email": "yamaha@mail.com",
      "description": "Perusahaan motor",
      "createdAt": "2021-06-08T12:01:50.148Z",
      "updatedAt": "2021-06-08T14:55:42.193Z"
    }
  ]
}

```
_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### GET /companies/:id
> Get company by id

_Request Header_
```
needed
```

_Request Params_
```
id needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "company": {
    "id": 1,
    "name": "Toyota",
    "companyLogo": "https://www.toyota.astra.co.id/sites/default/files/2019-11/fit-tc-logo.jpeg",
    "location": "Jepang",
    "email": "toyota2@mail.com",
    "description": "Perusahaan mobil",
    "createdAt": "2021-06-08T12:03:44.390Z",
    "updatedAt": "2021-06-08T12:03:44.390Z"
  }
}

```

_Response (404 - Not Found)_
```
{
    "message": "Not Found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---


### POST /companies
> Create new company

_Request Header_
```
needed
```

_Request Body_
```
{
  "name": "<name to get insert into>",
  "companyLogo": "<companyLogo to get insert into>",
  "location": "<location to get insert into>",
  "email": "<email to get insert into>",
  "description": "<description to get insert into>",
}
```

_Response (201 - Created)_

```
{
  "id": <given id by system>,
  "name": "<posted name>",
  "companyLogo": "<posted companyLogo>",
  "location": "<posted location>",
  "email": "<posted email>", 
  "description": "<posted description>", 
  "createdAt": "2020-06-08T07:15:12.149Z",
  "updatedAt": "2020-06-08T07:15:12.149Z",
}
```
_Response (400 - Bad Request)_

```
{
  "message": ["<error message>"]
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```
---

### PUT /companies/:id
> Update company data

_Request User Role_
```
User role admin
```

_Request Header_
```
needed
```

_Request Params_
```
id needed
```

_Request Body_
```
{
  "name": "<new name to get insert into>",
  "companyLogo": "<new companyLogo to get insert into>",
  "location": "<new location to get insert into>",
  "email": "<new email to get insert into>",
  "description": "<new description to get insert into>",
}
```

_Response (200 - OK)_

```
{
  "id": <given id by system>,
  "name": "<posted name>",
  "companyLogo": "<posted companyLogo>",
  "location": "<posted location>",
  "email": "<posted email>", 
  "description": "<posted description>", 
  "createdAt": "2020-06-08T07:15:12.149Z",
  "updatedAt": "2020-06-08T07:18:12.149Z",
}
```
_Response (400 - Bad Request)_

```
{
  "message": ["<error message>"]
}
```

Response (404 - Not Found)_
```
{
    "message": "Not Found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```
---

### Delete /companies/:id
> Delete company data

_Request User Role_
```
User role admin
```

_Request Header_
```
needed
```

_Request Params_
```
id needed
```

_Request Body_
```
not needed
```

_Response (200 - OK)_

```
{
  "message": "<entity name> success to delete"
}

```

Response (404 - Not Found)_
```
{
    "message": "Not Found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```
---
---




## Endpoint: /users
### GET /users
> Get all users

_Request Header_
```
needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "User": [
    {
      "id": 1,
      "username": null,
      "email": "admin@mail.com",
      "role": "admin",
      "phoneNumber": null,
      "address": null,
      "createdAt": "2021-06-08T11:51:51.672Z",
      "updatedAt": "2021-06-08T11:51:51.672Z"
    },
    {
      "id": 2,
      "username": null,
      "email": "ahmad@mail.com",
      "role": "staff",
      "phoneNumber": null,
      "address": null,
      "createdAt": "2021-06-08T12:00:29.265Z",
      "updatedAt": "2021-06-08T12:00:29.265Z"
    }
  ]
}

```
_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### GET /users/:id
> Get user by id

_Request Header_
```
needed
```

_Request Params_
```
id needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "user": {
    "id": 1,
    "username": null,
    "email": "admin@mail.com",
    "role": "admin",
    "phoneNumber": null,
    "address": null,
    "createdAt": "2021-06-08T11:51:51.672Z",
    "updatedAt": "2021-06-08T11:51:51.672Z"
  }
}

```

_Response (404 - Not Found)_
```
{
    "message": "Not Found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---


### POST /users
> Create new user

_Request Header_
```
needed
```

_Request Body_
```
{
  "email": "<name to get insert into>",
  "password": "<password to get insert into>"
}
```

_Response (201 - Created)_

```
{
  "user": {
    "id": 17,
    "email": "faisall@mail.com",
    "updatedAt": "2021-06-12T10:18:22.689Z",
    "createdAt": "2021-06-12T10:18:22.689Z",
    "username": null,
    "role": null,
    "phoneNumber": null,
    "address": null
  }
}
```
_Response (400 - Bad Request)_

```
{
  "message": ["<error message>"]
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```
---

### PUT /users/:id
> Update user data

_Request Header_
```
needed
```

_Request Params_
```
id needed
```

_Request Body_
```
{
  "username": "<new username to get insert into>",
  "email": "<new email to get insert into>",
  "password": "<new password to get insert into>",
  "role": "<new role to get insert into>",
  "phoneNumber": "<new phoneNumber to get insert into>",
  "address": "<new address to get insert into>",
}
```

_Response (200 - OK)_

```
{
  "username": "<posted username>",
  "email": "<posted email>",
  "role": "<posted role>",
  "phoneNumber": "<posted phoneNumber>", 
  "address": "<posted address>", 
}
```
_Response (400 - Bad Request)_

```
{
  "message": ["<error message>"]
}
```

Response (404 - Not Found)_
```
{
    "message": "Not Found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```
---

### Delete /users/:id
> Delete user data

_Request Header_
```
needed
```

_Request Params_
```
id needed
```

_Request Body_
```
not needed
```

_Response (200 - OK)_

```
{
  "message": "<entity name> success to delete"
}

```

Response (404 - Not Found)_
```
{
    "message": "Not Found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```
---



---
## Endpoint: /jobs
### GET /jobs
> Get all jobs

_Request Header_
```
needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "job": [
    {
      "id": 58,
      "title": "Service motor",
      "description": "ngoding bae",
      "companyId": 18,
      "authorId": 1,
      "jobType": "Full Time",
      "createdAt": "2021-06-12T03:32:16.086Z",
      "updatedAt": "2021-06-12T03:32:16.086Z",
      "Company": {
          "id": 18,
          "name": "Pepsi",
          "companyLogo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Pepsi_logo_new.svg/2560px-Pepsi_logo_new.svg.png",
          "location": "Amerika",
          "email": "pepsi@mail.com",
          "description": "Perusahaan soda",
          "createdAt": "2021-06-10T23:06:35.960Z",
          "updatedAt": "2021-06-12T08:52:02.104Z"
      },
        "User": {
          "id": 1,
          "username": null,
          "email": "admin@mail.com",
          "role": "admin",
          "phoneNumber": null,
          "address": null,
          "createdAt": "2021-06-08T11:51:51.672Z",
          "updatedAt": "2021-06-08T11:51:51.672Z"
      }
    }
  ]
}

```
_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### GET /jobs/:id
> Get job by id

_Request Header_
```
needed
```

_Request Params_
```
id needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "job": {
    "id": 58,
    "title": "Service motor",
    "description": "ngoding bae",
    "companyId": 18,
    "authorId": 1,
    "jobType": "Full Time",
    "createdAt": "2021-06-12T03:32:16.086Z",
    "updatedAt": "2021-06-12T03:32:16.086Z",
    "Company": {
        "id": 18,
        "name": "Pepsi",
        "companyLogo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Pepsi_logo_new.svg/2560px-Pepsi_logo_new.svg.png",
        "location": "Amerika",
        "email": "pepsi@mail.com",
        "description": "Perusahaan soda",
        "createdAt": "2021-06-10T23:06:35.960Z",
        "updatedAt": "2021-06-12T08:52:02.104Z"
    },
    "User": {
        "id": 1,
        "username": null,
        "email": "admin@mail.com",
        "password": "$2a$05$HPlX1eQ.N4Ai16wOjEB0h.si7ptMy7Cle1VCDfYYxYsYUKMgm/vZS",
        "role": "admin",
        "phoneNumber": null,
        "address": null,
        "createdAt": "2021-06-08T11:51:51.672Z",
        "updatedAt": "2021-06-08T11:51:51.672Z"
    }
  }
}

```

_Response (404 - Not Found)_
```
{
    "message": "Not Found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---


### POST /jobs
> Create new job

_Request Header_
```
needed
```

_Request Body_
```
{
  "title": "Programmer senior",
  "description": "Ospek anak muda",
  "companyId": 18,
  "jobType": "full time"
}
```

_Response (201 - Created)_

```
{
  "job": {
      "id": 62,
      "title": "Programmer senior",
      "description": "Ospek anak muda",
      "companyId": 18,
      "authorId": 1,
      "jobType": "full time",
      "updatedAt": "2021-06-12T10:48:50.949Z",
      "createdAt": "2021-06-12T10:48:50.949Z"
  }
}
```
_Response (400 - Bad Request)_

```
{
  "message": ["<error message>"]
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```
---

### PUT /jobs/:id
> Update job data

_Request User Role_
```
User role admin : can do everything
User role staff : the jobs only belongs to staff
```

_Request Header_
```
needed
```

_Request Params_
```
id needed
```

_Request Body_
```
{
  "name": "Toyota",
  "companyLogo": "https://www.toyota.astra.co.id/sites/default/files/2019-11/fit-tc-logo.jpeg",
  "location": "Jepang",
  "email": "toyota@mail.com",
  "description": "Perusahaan mobil aja"
}
```

_Response (200 - OK)_

```
{
  "job": {
      "name": "Toyota",
      "companyLogo": "https://www.toyota.astra.co.id/sites/default/files/2019-11/fit-tc-logo.jpeg",
      "location": "Jepang",
      "email": "toyota@mail.com",
      "description": "Perusahaan mobil aja"
  }
}
```
_Response (400 - Bad Request)_

```
{
  "message": ["<error message>"]
}
```

Response (404 - Not Found)_
```
{
    "message": "Not Found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```
---

### Delete /jobs/:id
> Delete job data

_Request User Role_
```
User role admin : can do everything
User role staff : the jobs only belongs to staff
```

_Request Header_
```
needed
```

_Request Params_
```
id needed
```

_Request Body_
```
not needed
```

_Response (200 - OK)_

```
{
  "message": "<entity name> success to delete"
}

```

Response (404 - Not Found)_
```
{
    "message": "Not Found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```
---
---

## Endpoint: /login
### POST /login
> to login

_Request Header_
```
not needed
```

_Request Body_

```
{
  "email": "your email",
  "password": "your password",
}
```

_Response (200)_

```
login and go to home page

```

_Response (400 - Bad request)_

```
{
  "message": "Wrong Email/Password"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---
---
## Endpoint: /register
### POST /register
> to register

_Request Header_
```
not needed
```

_Request Body_

```
{
  "email": "your email",
  "password": "your password",
}
```

_Response (200)_

```
to login page

```
_Response (400 - Bad request)_

```
{
  "message": ["<error message>"]
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```
---
---

## Endpoint: /loginGoogle
### POST /loginGoogle
> to login

_Request Header_
```
not needed
```

_Request Body_

```
account google
```

_Response (200)_

```
if the user has registered on the career portal : login and go to the home page
if not : the user registered, login and go to home page

```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```
---
---


