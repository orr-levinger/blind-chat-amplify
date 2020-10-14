/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      location
      createdAt
      images
      name
      phoneNumber
      email
      identityStatus
      updatedAt
      matches {
        items {
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
        }
        nextToken
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      location
      createdAt
      images
      name
      phoneNumber
      email
      identityStatus
      updatedAt
      matches {
        items {
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
        }
        nextToken
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      location
      createdAt
      images
      name
      phoneNumber
      email
      identityStatus
      updatedAt
      matches {
        items {
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
        }
        nextToken
      }
    }
  }
`;
export const createMatch = /* GraphQL */ `
  mutation CreateMatch(
    $input: CreateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    createMatch(input: $input, condition: $condition) {
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
export const updateMatch = /* GraphQL */ `
  mutation UpdateMatch(
    $input: UpdateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    updateMatch(input: $input, condition: $condition) {
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
export const deleteMatch = /* GraphQL */ `
  mutation DeleteMatch(
    $input: DeleteMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    deleteMatch(input: $input, condition: $condition) {
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
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
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
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
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
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
      id
      body
      Feature
      createdAt
      answers {
        body
        value
        iceBreaker
      }
      updatedAt
    }
  }
`;
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      id
      body
      Feature
      createdAt
      answers {
        body
        value
        iceBreaker
      }
      updatedAt
    }
  }
`;
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      id
      body
      Feature
      createdAt
      answers {
        body
        value
        iceBreaker
      }
      updatedAt
    }
  }
`;
