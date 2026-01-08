import { gql } from '@apollo/client';

export const getAllRickData = gql`
  query getAllRickData($page: Int! = 1) {
    characters(page: $page, filter: { name: "rick" }) {
      info {
        count
      }
      results {
        id
        name
        status
        species
        type
        gender
        image
        origin {
          name
        }
        episode {
          id
        }
        location {
          name
        }
        created
      }
    }
  }
`;
