import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetAllUsers {
    getAllUsers {
        id,
        email,
        password
    }
  }
`;

export const GET_USER = gql`
  query GetUser($id:Int) {
    getUser (id: $id) {
      id
      email
      password
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String
    ) {
    createUser (
        firstName: $firstName 
        lastName: $lastName 
        email: $email 
        password: $password
      ) {
      firstName
      lastName
      email
      password
    }
  }
`;