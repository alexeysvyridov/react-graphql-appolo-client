import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      _id,
      email,
      password
    }
  }
`;

export const GET_USER = gql`
  query GetUser($_id:String) {
    getUser (_id: $_id) {
      _id
      email
      password
    }
  }
`;
export const DELETE_USER = gql`
  mutation DeleteUser($_id: String!) {
    deleteUser (_id: $_id) {
      _id
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
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