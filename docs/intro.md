---
sidebar_position: 1
---

# API Documentation

<!-- ## Base URL

| **Environment** | **URL**                   |
| --------------- | ------------------------- |
| Development     | https://dev-ah.sdk.io/api |
| Staging         | https://stg-ah.sdk.io/api |
| Production      | https://pro-ah.sdk.io/api | -->

## API Authorization

- All API endpoints require a valid Bearer access token in order to access.
- To start accessing the API, you will need to have the following credentials:

| **Credential**       |
| -------------------- |
| Tenant service ID    |
| Tenant audience name |
| Tenant private key   |

- The credentials above will be provided by AHSDK. To start generating the Bearer access token, refer to the example below.

**Example**

```js
import * as jwt from 'jsonwebtoken';

// Generate jwt token using RS256
const payload = { ...some_data };
const signOptions = {
  issuer: 'tenant-service-id',
  subject: 'string',
  audience: 'tenant-audience',
  expiresIn: '1y',
  algorithm: 'RS256',
};
const token = jwt.sign(payload, PRIVATE_KEY, signOptions);
```
