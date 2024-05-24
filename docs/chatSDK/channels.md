---
sidebar_position: 4
---

# Channels

Channels can be used to create conversations between users. In most cases, users will have multiple channels. Below there's few method can uses for query channel data.

---

## Get All Channels

The `chatClient.getAllChannels` method returns all channels of the current user.

```js title="Get All Channels"
const channels = await chatClient.getAllChannels();
```

**Response**

| **Name**      | **Type**       | **Description**                                                     |
| ------------- | -------------- | ------------------------------------------------------------------- |
| id            | string         | The channel unique identifier.                                      |
| name          | string         | The name of the channel.                                            |
| lastMessageId | string         | The latest message id.                                              |
| status        | string         | Channel room status, ie, `replied` or `unreplied`                   |
| type          | string         | The channel type. eg, `channel`, `group`                            |
| createdAt     | string         | string Record created timestamps                                    |
| updatedAt     | string         | Record updated timestamps                                           |
| unreadCount   | number         | The number that indicated how many messsages is unread by the users |
| users         | User           | Users that involve in this channel                                  |
| metadata      | object         | Additional metadata of this channel                                 |
| chat          | object or null | Last message details                                                |

**Chat object**

| **Name**         | **Type**  | **Description**                                                           |
| ---------------- | --------- | ------------------------------------------------------------------------- |
| id               | string    | The message id.                                                           |
| message          | string    | The message body for text message.                                        |
| subText          | string    | The text appended with image or video.                                    |
| options          | string[]  | The options for question type message.                                    |
| type             | string    | The message type. eg, `text`, `image`, `video`, `question`, `appointment` |
| roomId           | string    | The channel id                                                            |
| tags             | string[]  | Additional tags for this message                                          |
| replyTo          | string    | Replying to the Chat Id                                                   |
| referenceId      | string    | Chat Id that this message forwarded from                                  |
| metadata         | object[]  | Additional metadata of this message hold.                                 |
| metadata[].key   | string    | Key of the metadata                                                       |
| metadata[].value | string    | Value of the metadata                                                     |
| from             | string    | The sender user id                                                        |
| to               | string    | The receiver user id                                                      |
| private          | boolean   | Indicator for this chat can be forward or not                             |
| status           | object[]  | Status of the message                                                     |
| readStatus       | boolean   | Indicator for read/unread status                                          |
| createdAt        | timestamp | Timestamp of the message created                                          |
| updatedAt        | timestamp | Timestamp of the message updated                                          |

**Example**

```js
[
  {
    id: 'string',
    name: 'string',
    lastMessageId: 'string',
    status: 'string',
    type: 'string',
    createdAt: 'timestamp',
    updatedAt: 'timestamp',
    unreadCount: 'number',
    metadata: [{ key: 'leadCoachId', value: 'string' }],
    chat: {
      id: 'string',
      message: 'string',
      subText: 'string',
      options: ['string', 'string'],
      type: 'string',
      roomId: 'string',
      tags: ['string', 'string'],
      replyTo: 'string',
      referenceId: 'string',
      metadata: [
        { key: 'string', value: 'string' },
        { key: 'string', value: 'string' },
      ],
      from: 'string',
      to: 'string',
      private: 'boolean',
      readStatus: 'boolean',
      status: [
        [
          {
            userId: 'string',
            status: 'string',
            createdAt: 'timestamp',
            updatedAt: 'timestamp',
          },
        ],
      ],
      createdAt: 'timestamp',
      updatedAt: 'timestamp',
    },
    users: [
      {
        id: 'string',
        reference: 'coach',
        userId: 'string',
        metadata: [
          {
            key: 'name',
            value: 'Zhi Kang',
          },
          {
            key: 'coachRole',
            value: 'dietitian',
          },
          {
            key: 'country',
            value: 'my',
          },
          {
            key: 'photo',
            value:
              'https://s3.ap-southeast-1.amazonaws.com/uploads.naluri.net/users/fdd37904-3170-44b9-b9e1-8f93d46b50d2/68d23c88-ca43-4a64-a8da-3bb25e081a57.png',
          },
          {
            key: 'bio',
            value: 'This is my bio',
          },
          {
            key: 'experience',
            value:
              '[{"title":"Clinic Psychologist, The Mind Psychological Services and Training","period":"2017 - present"},{"title":"Clinic Psychologist, Global Doctors Hospital","period":"2018 - 2020"}]',
          },
          {
            key: 'education',
            value:
              '[{"title":"Master of Clinical Psychology, HELP University","period":"2017"}]',
          },
        ],
      },
      {
        id: 'string',
        reference: 'ahsdk',
        userId: 'string',
        metadata: 'undefined',
      },
      {
        id: 'string',
        reference: 'ahsdk',
        userId: 'string',
        metadata: 'undefined',
      },
    ],
  },
];
```

---

## Subscription All Channels

The `chatClient.subscribe` method is the default method for subscribing to new messages in the channel listing. When called, this method records any new messages that are sent to the channels that the client is subscribed to.

```js title="Subscription All Channels"
const subscription = chatClient.subscribe(
  ({ data, error }: SubscriptionCallback) => {
    // subscription callback update channel details.
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

**Callback data response**

```js title="Subscription Data Response"
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
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

:::danger UNSUBSCRIBING WHEN USING REACT/REACT NATIVE

When you are unmounting a component that has a subscription, you should unsubscribe from the subscription to prevent memory leaks. You can do this by returning a function from the useEffect hook that calls the unsubscribe method.

:::

```js title="Unsubscribe in React/React Native useEffect hook"
useEffect(() => {
  const subscription = chatClient.subscribe(
    ({ data, error }: SubscriptionCallback) => {
      if (data) console.log(data);
      if (error) console.error(error);
    }
  );

  return () => subscription.unsubscribe();
}, []);
```
