import gql from "graphql-tag";

// const date = new Date(Date.now()).toISOString().replace("Z", "+00:00");

export const UPDATE_USER = gql`
  mutation (
    $id: String!
    $fullname: String!
    $phone: String!
    $location: String!
  ) {
    updateOneUser(
      query: { id: $id }
      set: { fullname: $fullname, phone: $phone, location: $location }
    ) {
      fullname
      phone
      location
    }
  }
`;
