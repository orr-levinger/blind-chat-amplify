/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const subscribeToNewMatch = /* GraphQL */ `
  subscription SubscribeToNewMatch($userId: ID!) {
    subscribeToNewMatch(userId: $userId) {
      id
      accepted
      approved
      userId
      images
      distance
      matchRate
      createdAt
      displayName
      updatedAt
      conversation {
        id
        users
        createdAt
        updatedAt
        matches {
          nextToken
        }
        messages {
          nextToken
        }
      }
    }
  }
`;
export const subscribeToUpdateMatch = /* GraphQL */ `
  subscription SubscribeToUpdateMatch($userId: ID!) {
    subscribeToUpdateMatch(userId: $userId) {
      id
      accepted
      approved
      userId
      images
      distance
      matchRate
      createdAt
      displayName
      updatedAt
      conversation {
        id
        users
        createdAt
        updatedAt
        matches {
          nextToken
        }
        messages {
          nextToken
        }
      }
    }
  }
`;
export const subscribeToDeleteMatch = /* GraphQL */ `
  subscription SubscribeToDeleteMatch($userId: ID!) {
    subscribeToDeleteMatch(userId: $userId) {
      id
      accepted
      approved
      userId
      images
      distance
      matchRate
      createdAt
      displayName
      updatedAt
      conversation {
        id
        users
        createdAt
        updatedAt
        matches {
          nextToken
        }
        messages {
          nextToken
        }
      }
    }
  }
`;
export const subscribeToNewMessage = /* GraphQL */ `
  subscription SubscribeToNewMessage($conversationID: ID!) {
    subscribeToNewMessage(conversationID: $conversationID) {
      id
      authorId
      recipientId
      createdAt
      content
      messageStatus
      liked
      conversationID
      updatedAt
    }
  }
`;
export const subscribeToUpdatedMessage = /* GraphQL */ `
  subscription SubscribeToUpdatedMessage($conversationID: ID!) {
    subscribeToUpdatedMessage(conversationID: $conversationID) {
      id
      authorId
      recipientId
      createdAt
      content
      messageStatus
      liked
      conversationID
      updatedAt
    }
  }
`;
export const subscribeToDeletedMessage = /* GraphQL */ `
  subscription SubscribeToDeletedMessage($conversationID: ID!) {
    subscribeToDeletedMessage(conversationID: $conversationID) {
      id
      authorId
      recipientId
      createdAt
      content
      messageStatus
      liked
      conversationID
      updatedAt
    }
  }
`;
