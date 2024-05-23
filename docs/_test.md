<!-- ---
sidebar_position: 1
---

# API Documentation

## Structure

---

This is table

| First Header | Second Header    |
| ------------ | ---------------- |
| Content Cell | **Content Cell** |
| Content Cell | Content Cell     |

---

this is bold text **creating a new site**.

---

this is link [Node.js](https://nodejs.org/en/download/)

---

this is bash

```bash
npm init docusaurus@latest my-website classic
```

---

this is code block

```js title="sidebars.js"
import * as jwt from 'jsonwebtoken';

// Generate jwt token using RS256
const payload = { ...some_data };
// highlight-next-line
const signOptions = {
  issuer: 'tenant-service-id',
  subject: 'string',
  audience: 'tenant-audience',
  expiresIn: '1y',
  algorithm: 'RS256',
};
const token = jwt.sign(payload, PRIVATE_KEY, signOptions);
```

---

this is link with no tag http://localhost:3000/.

---

this is li tag

- a **sidebar**
- **previous/next navigation**
- **versioning**

---

this is file highlight `docs/hello.md`:

---

this is image
![Docusaurus logo](/img/docusaurus.png)

---

this is tip
:::tip My tip

Use this awesome feature option

:::

:::info My tip

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::

:::note Take care

This action is dangerous

:::

:::caution Take care

This action is dangerous

::: -->
