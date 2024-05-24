---
sidebar_position: 2
---

# Login

- Once initialised, you must specify the current user with `login`:

```js
const user = await chatClient.login({
  authorizationCode: 'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIi...',
});
```

:::info Info

You could get the authorization code through _**/auth/pre-auth**_ from **AH Gateway**

```js title="Get pre-auth authorization code from AH Gateway"
const result = await axios.post(
  'https://staging-ah.naluri.net/auth/pre-auth',
  {
    userId: 'naluri_user_id',
  },
  {
    headers: {
      Authorization: 'Bearer token_generated_by_using_private_key',
    },
  }
);

// return { authorizationCode: '...' }
```

:::

### Connect User’s return value

| Name         | Type   | Description                                                                          |
| ------------ | ------ | ------------------------------------------------------------------------------------ |
| user         | object | The user object that contains the id, name, images.                                  |
| accessToken  | string | The user authentication access token.                                                |
| idToken      | string | The user authentication id token.                                                    |
| refreshToken | string | The user authentication refresh token.                                               |
| expiresIn    | number | The expiration of accessToken and idToken in unit seconds. eg, 3600 seconds (1 hour) |

:::info Info

- `accessToken` and `idToken` only lasted for 1 hour, inactivity for 1 hour will be unauthenticated.
- the tokens would be refreshed if user is actively using the Chat SDK.

:::

**Example**

```js
{
  "user": {
    "id": "string",
    "tenantId": "string",
    "subscriptionId": "string",
    "name": "string",
    "email": "string",
    "country": "string",
    "preferredLanguage": "string",
    "referenceId": "string",
    "claims": {
      ...
    },
    "couponId": "string",
    "codeId": "string"
  },
  "accessToken": "string",
  "idToken": "string",
  "refreshToken": "string",
  "expiresIn": "number"
}
```
