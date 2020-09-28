/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($id: String) {
    onCreateUser(id: $id) {
      id
      location
      createdAt
      images
      name
      email
      updatedAt
      matches {
        items {
          id
          aproved
          userId
          images
          distance
          matchRate
          createdAt
          displayName
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($id: String) {
    onUpdateUser(id: $id) {
      id
      location
      createdAt
      images
      name
      email
      updatedAt
      matches {
        items {
          id
          aproved
          userId
          images
          distance
          matchRate
          createdAt
          displayName
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($id: String) {
    onDeleteUser(id: $id) {
      id
      location
      createdAt
      images
      name
      email
      updatedAt
      matches {
        items {
          id
          aproved
          userId
          images
          distance
          matchRate
          createdAt
          displayName
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onCreateMatch = /* GraphQL */ `
  subscription OnCreateMatch($userId: String) {
    onCreateMatch(userId: $userId) {
      id
      aproved
      userId
      images
      distance
      matchRate
      createdAt
      displayName
      updatedAt
      conversion {
        id
        messages {
          nextToken
        }
        users
        createdAt
        updatedAt
        maches {
          nextToken
        }
      }
    }
  }
`;
export const onUpdateMatch = /* GraphQL */ `
  subscription OnUpdateMatch($userId: String) {
    onUpdateMatch(userId: $userId) {
      id
      aproved
      userId
      images
      distance
      matchRate
      createdAt
      displayName
      updatedAt
      conversion {
        id
        messages {
          nextToken
        }
        users
        createdAt
        updatedAt
        maches {
          nextToken
        }
      }
    }
  }
`;
export const onDeleteMatch = /* GraphQL */ `
  subscription OnDeleteMatch($userId: String) {
    onDeleteMatch(userId: $userId) {
      id
      aproved
      userId
      images
      distance
      matchRate
      createdAt
      displayName
      updatedAt
      conversion {
        id
        messages {
          nextToken
        }
        users
        createdAt
        updatedAt
        maches {
          nextToken
        }
      }
    }
  }
`;
