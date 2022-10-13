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