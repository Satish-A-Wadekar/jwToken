# jwToken or JSON WEB Token

- Author: [Satish Wadekar](https://www.linkedin.com/in/satish-4b565056/)
- License: [MIT](https://github.com/Satish-A-Wadekar/jwToken/blob/main/LICENSE "MIT")
- Repo URL: [https://github.com/Satish-A-Wadekar/jwToken](https://github.com/Satish-A-Wadekar/jwToken)
- Contacts: satish.a.wadekar@gmail.com
- Requirements: Node.js v6 or higher, npm OR yarn

## Features
quick boilerplate on JSON Web token (jwToken), how to generate token and use it in other api's

## Installation
install all packages from `package.json` 

```
  npm install OR yarn install
```
### Environment Variables

To run this project, you will need to add the following environment variables to your .env file at root level of your repo (i have a added .env_template file for ref)

| Variables | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `JWT_SIGNATURE`      | `string` | **Required**. any key or string which you would like to keep as token string |
| `SIGNATURE_EXPIRY`      | `string` | **Required**. set token expiration period, check options here https://github.com/vercel/ms |

## Usage

### API header parameters
| Header Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `x-access-token`      | `string` | **Required**. pass the token which was generated in first call |




once the project is up and running, you can check the postman collection in the repo, just run the API's one by one

### API's

#### Generate new token

```
  GET /generateToken
```

#### POST call

```
  POST /your_xyz_route
```

for more configurations on JWT, you can refer this documentation
https://www.npmjs.com/package/jsonwebtoken

good luck, happy coding :)