import { gql } from "@apollo/client";

export const PROJECTS_LIST = gql`
  query Projects($search: String = "%%") {
    projects(
      order_by: { created_at: asc }
      where: {
        _or: [{ captions: { _ilike: $search } }, { title: { _ilike: $search } }]
      }
    ) {
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
