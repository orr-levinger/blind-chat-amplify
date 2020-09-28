/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        location
        createdAt
        images
        name
        email
        updatedAt
        matches {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const usersByLocation = /* GraphQL */ `
  query UsersByLocation(
    $location: String
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByLocation(
      location: $location
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        location
        createdAt
        images
        name
        email
        updatedAt
        matches {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getMatch = /* GraphQL */ `
  query GetMatch($id: ID!) {
    getMatch(id: $id) {
      id
      aproved
      userId
      images
      distance
      matchRate
      createdAt
      displayName
      updatedAt
      conversation {
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
export const listMatchs = /* GraphQL */ `
  query ListMatchs(
    $filter: ModelMatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatchs(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        conversation {
          id
          users
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listConversations = /* GraphQL */ `
  query ListConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
      id
      messages {
        items {
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
        nextToken
      }
      users
      createdAt
      updatedAt
      maches {
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
