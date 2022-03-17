import { gql } from "@apollo/client";

export const PROJECTS_LIST = gql`
  query Projects {
    projects(order_by: { created_at: asc }) {
      id
      captions
      description
      created_at
      live_url
      tech_stack
      thumbnail
      title
      type
      updated_at
    }
  }
`;
