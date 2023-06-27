import { gql } from '@apollo/client';

export const SING_UP = gql`
  mutation signUp($input: SignUpRequest!) {
    userSignUp(input: $input) {
      problem {
        message
      }
      token
      user {
        avatarUrl
        birthDate
        country
        createdAt
        deletedAt
        email
        firstName
        gender
        id
        lastName
        middleName
        phone
        updatedAt
      }
    }
  }
`;

export const SING_IN = gql`
  mutation signIn($input: SignInRequest!) {
    userSignIn(input: $input) {
      problem {
        message
      }
      token
      user {
        avatarUrl
        birthDate
        country
        createdAt
        deletedAt
        email
        firstName
        gender
        id
        lastName
        middleName
        phone
        updatedAt
      }
    }
  }
`;

export const GET_POSTS = gql`
  query getAllPosts($input: FindPostsRequest!) {
    posts(input: $input) {
      data {
        author {
          avatarUrl
          firstName
          lastName
        }
        authorId
        createdAt
        deletedAt
        description
        id
        isLiked
        likesCount
        mediaUrl
        title
        updatedAt
      }
      pageInfo {
        afterCursor
        count
        perPage
      }
    }
  }
`;
