---
sidebar_position: 3
---

# Initialization

- A single package contains virtually everything you need to set up Chat & Video SDK.

```js
import { ahSDK } from 'ahsdk';

// at client-side, you initialize the Chat client with your API key
ahSDK.init(
  {
    apiKey: 'YOUR_API_KEY',
    apiSecret: 'YOUR_API_SECRET',
    environment: 'production',
    onRefreshTokenError: () => {
      // handle refresh token error
    },
  },
  {
    apiKey: 'YOUR_API_VIDEO_KEY',
    apiSecret: 'YOUR_API_SECRET',
    environment: 'production',
    onRefreshTokenError: () => {
      // handle refresh token error
    },
  }
);

// get the instance after initialized
const chatClient = ahSDK.getChat();

// get the instance after initialized
const VideoSdk = ahSDK.getVideo();
```

## Object Parameters

| **Parameter**       | **Description**                                | **Type** | **Required** |
| ------------------- | ---------------------------------------------- | -------- | ------------ |
| apiKey              | The api key that provided by AHSDK             | String   | Yes          |
| apiSecret           | The api secret that associate with the api key | String   | No           |
| environment         | `production` or `staging`                      | String   | Yes          |
| onRefreshTokenError | Callback function when refresh token error     | Function | No           |

:::info Info

- `onRefreshTokenError` is optional, if not provided, the default behaviour is to throw an `AHChatErrors` error of code 4009.

- `onRefreshTokenError` is called when the refresh token is expired or invalid.

:::
