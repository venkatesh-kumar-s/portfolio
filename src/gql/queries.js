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

export const BLOGS_LIST = gql`
  query Blogs($search: String = "") {
    blogs(
      order_by: { created_at: desc }
      where: {
        _or: [{ title: { _ilike: $search } }, { type: { _ilike: $search } }]
      }
    ) {
      banners
      captions
      conslusion
      content
      created_at
      id
      introduction
      thumbnail
      title
      type
    }
  }
`;

export const SKILLS_LIST = gql`
  query Skills {
    skills(order_by: { created_at: asc }) {
      id
      rating
      title
    }
  }
`;
