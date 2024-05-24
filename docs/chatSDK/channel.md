---
sidebar_position: 3
---

# Channel

## Initialize Channel Instance

The chatClient.getChannel method returns a channel instance that can be used to query channel data. The channel instance is initialized with the channel id obtained from the [Get All Channels](./channels.md) method.

```js title="Instantiate Channel"
const chatChannel = chatClient.getChannel(channelId);
```

**Response**

| **Name**    | **Type** | **Argument** | **Description**                           |
| ----------- | -------- | ------------ | ----------------------------------------- |
| getMessages | Function |              | Retrieve messages that is in this channel |
| >           |          | after        | `string` - The last message id            |
| >           |          | limit        | `number` - Number of message to retrieve  |

```js title="Get Messages"
await chatChannel.getMessages({
  after: '992e6e89-2bd0-47a1-bdd4-52b54b3c3b11',
  limit: 20,
});
```

---

## Subscription individual channel

The chatChannel.subscribe() method is the method for subscribing to new messages in individual channel. When called, this method records any new messages that are sent to the channel that the client is subscribed to.

```js title="Subscription Channel"
const subscription = chatChannel.subscribe(
  ({ data, error }: SubscriptionCallback) => {
    // subscription callback update messages list.
    if (data) console.log(data);
    if (error) console.error(error);
  }
);
```

**Subscription callback function**

| **Name** | **Type**    | **Description**                                    |
| -------- | ----------- | -------------------------------------------------- |
| data     | ChatMessage | The new messages will return in ChatMessage format |
| error    |             | Error message that return from AHSDK.              |

**Data response example**

```js
{
  "id": "string",
  "message": "string",
  "subText": "string",
  "options": ["string", "string"],
  "type": "string",
  "roomId": "string",
  "tags": ["string", "string"],
  "replyTo": "string",
  "referenceId": "string",
  "metadata": [
    { "key": "string", "value": "string" },
    { "key": "string", "value": "string" }
  ],
  "from": "string",
  "to": "string",
  "private": "boolean",
  "readStatus": "boolean",
  "status": [
    [
      {
        "userId": "string",
        "status": "string",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      }
    ]
  ],
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

:::danger UNSUBSCRIBING WHEN USING REACT/REACT NATIVE

When you are unmounting a component that has a subscription, you should unsubscribe from the subscription to prevent memory leaks. You can do this by returning a function from the useEffect hook that calls the unsubscribe method.

:::

```js title="Unsubscribe in React/React Native useEffect hook"
useEffect(() => {
  const subscription = chatChannel.subscribe(
    ({ data, error }: SubscriptionCallback) => {
      if (data) console.log(data);
      if (error) console.error(error);
    }
  );

  return () => subscription.unsubscribe();
}, []);
```
