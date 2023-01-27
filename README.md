# jwToken or JSON WEB Token

quick boilerplate of JSON Web token (jwToken), how to generate token and use it in other api's

## API Reference

#### Generate new token

```http
  GET /generateToken
```

#### POST call

```http
  POST /your_xyz_route
```

| Header Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `x-access-token`      | `string` | **Required**. pass the token which was generated in first call |


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`JWT_SIGNATURE` any key or string which you would like to keep as token string

`SIGNATURE_EXPIRY` set token expiration period, check options here https://github.com/vercel/ms
## Setup

just do

```http
  npm install OR yarn install
```

once the project is running, you can check the postman collection in the repo, just run the API's one by one
