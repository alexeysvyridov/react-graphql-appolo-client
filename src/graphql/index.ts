import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      _id,
      email,
    }
  }
`;

export const GET_USER = gql`
  query GetUser($_id:String) {
    getUser (_id: $_id) {
      _id
      email
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
export const SIGNUP = gql`
  mutation SignUp(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    ) {
    signup (
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

export const AUTH = gql`
  mutation Login (
    $email: String!
    $password: String!
  ) {
    login(
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;