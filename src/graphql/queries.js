/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      location
      createdAt
      images
      name
      phoneNumber
      DOB
      intrests
      gender
      sexualOrientation
      email
      identityStatus
      matchFilters {
        gender
        sexualOrientation
        maxAge
        distance
        minAge
      }
      updatedAt
      answeredQuestions {
        items {
          id
          createdAt
          userId
          answerId
          updatedAt
        }
        nextToken
      }
      matches {
        items {
          id
          accepted
          approved
          userId
          images
          intrests
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
        phoneNumber
        DOB
        intrests
        gender
        sexualOrientation
        email
        identityStatus
        matchFilters {
          gender
          sexualOrientation
          maxAge
          distance
          minAge
        }
        updatedAt
        answeredQuestions {
          nextToken
        }
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
        phoneNumber
        DOB
        intrests
        gender
        sexualOrientation
        email
        identityStatus
        matchFilters {
          gender
          sexualOrientation
          maxAge
          distance
          minAge
        }
        updatedAt
        answeredQuestions {
          nextToken
        }
        matches {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        body
        createdAt
        answers {
          id
          body
          iceBreaker
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      body
      createdAt
      answers {
        id
        body
        effects {
          feature
          value
        }
        iceBreaker
      }
      updatedAt
    }
  }
`;
export const getAnsweredQuestion = /* GraphQL */ `
  query GetAnsweredQuestion($id: ID!) {
    getAnsweredQuestion(id: $id) {
      id
      createdAt
      userId
      answerId
      updatedAt
      question {
        id
        body
        createdAt
        answers {
          id
          body
          iceBreaker
        }
        updatedAt
      }
    }
  }
`;
export const listAnsweredQuestions = /* GraphQL */ `
  query ListAnsweredQuestions(
    $filter: ModelAnsweredQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnsweredQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        userId
        answerId
        updatedAt
        question {
          id
          body
          createdAt
          updatedAt
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
      accepted
      approved
      userId
      images
      intrests
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
export const listMatchs = /* GraphQL */ `
  query ListMatchs(
    $filter: ModelMatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatchs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        accepted
        approved
        userId
        images
        intrests
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
      nextToken
    }
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
      id
      users
      createdAt
      updatedAt
      matches {
        items {
          id
          accepted
          approved
          userId
          images
          intrests
          distance
          matchRate
          createdAt
          displayName
          updatedAt
        }
        nextToken
      }
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
    }
  }
`;
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
