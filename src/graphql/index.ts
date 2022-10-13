import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
query GetContinentCountires($filter: CountryFilterInput) {
  countries(filter: $filter) {
    name
    code
    phone
  }
}`;
export const GET_COUNTRY = gql`
query GetContinentCountires($code: ID!) {
  country(code: $code) {
    name
    code
    phone
  }
}`;


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